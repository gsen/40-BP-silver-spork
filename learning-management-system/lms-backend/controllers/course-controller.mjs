import {
    createNewCourse,
    editCourse,
    fetchCourseById,
    fetchCourses,
    removeCourse
} from "../services/course-service.mjs";

export async function getCourses(req, res) {
    try {
        const courses = await fetchCourses();
        res.json(courses);
    } catch (ex) {
        res.status(500).json({ message: "Unable to fetch courses", error: ex.message });
    }
}

export async function getCourseById(req, res) {
    try {
        const course = await fetchCourseById(req.params.id);

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.json(course);
    } catch (ex) {
        res.status(500).json({ message: "Unable to fetch course", error: ex.message });
    }
}

export async function createCourse(req, res) {
    try {
        const { course, error, status } = await createNewCourse(req.user, req.body);

        if (error) {
            return res.status(status).json({ message: error });
        }
        res.status(201).json(course);
    } catch (ex) {
        res.status(400).json({ message: "Unable to create course", error: ex.message });
    }
}

export async function updateCourse(req, res) {
    try {
        const { course, error, status } = await editCourse(req.user, req.params.id, req.body);

        if (error) {
            return res.status(status).json({ message: error });
        }
        res.json(course);
    } catch (ex) {
        res.status(400).json({ message: "Unable to update course", error: ex.message });
    }
}

export async function deleteCourse(req, res) {
    try {
        const { message, error, status } = await removeCourse(req.user, req.params.id);

        if (error) {
            return res.status(status).json({ message: error });
        }
        res.json({ message });
    } catch (ex) {
        res.status(500).json({ message: "Unable to delete course", error: ex.message });
    }
}
