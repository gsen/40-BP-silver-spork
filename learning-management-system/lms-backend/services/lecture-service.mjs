import Course from "../models/course.mjs";
import Lecture from "../models/lecture.mjs";

function canManageCourse(user, course) {
    return user?.role === "instructor" && course.instructor.toString() === user.id;
}

async function findManageableCourse(user, courseId) {
    const course = await Course.findById(courseId);

    if (!course) {
        return { status: 404, error: "Course not found" };
    }

    if (!canManageCourse(user, course)) {
        return { status: 403, error: "You cannot manage lectures for this course" };
    }

    return { course };
}

export async function fetchLectures(courseId) {
    const filter = courseId ? { course: courseId } : {};

    return Lecture.find(filter)
        .populate("course", "title")
        .sort({ createdAt: -1 });
}

export async function fetchLectureById(id) {
    return Lecture.findById(id).populate("course", "title");
}

export async function createLecture(user, courseId, lectureData) {
    const { course, error, status } = await findManageableCourse(user, courseId);

    if (error) {
        return { error, status };
    }

    const { title, description, videoUrl, duration } = lectureData;
    const lecture = await Lecture.create({
        title,
        description,
        videoUrl,
        duration,
        course: course._id
    });

    course.lectures.push(lecture._id);
    await course.save();

    return { lecture };
}

export async function editLecture(user, lectureId, updates) {
    const lecture = await Lecture.findById(lectureId);

    if (!lecture) {
        return { status: 404, error: "Lecture not found" };
    }

    const { error, status } = await findManageableCourse(user, lecture.course);

    if (error) {
        return { error, status };
    }

    const allowedUpdates = ["title", "description", "videoUrl", "duration"];
    for (const field of allowedUpdates) {
        if (updates[field] !== undefined) {
            lecture[field] = updates[field];
        }
    }

    await lecture.save();
    return { lecture };
}

export async function removeLecture(user, lectureId) {
    const lecture = await Lecture.findById(lectureId);

    if (!lecture) {
        return { status: 404, error: "Lecture not found" };
    }

    const { course, error, status } = await findManageableCourse(user, lecture.course);

    if (error) {
        return { error, status };
    }

    course.lectures.pull(lecture._id);
    await course.save();
    await lecture.deleteOne();

    return { message: "Lecture deleted successfully" };
}
