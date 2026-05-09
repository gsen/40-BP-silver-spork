import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import { CheckCircle2, Circle, PlayCircle } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchLecturesByCourseQuery } from "@/store/services/lecture-service";
import {
  useFetchUserEnrollmentsQuery,
  useMarkLectureCompleteMutation,
} from "@/store/services/enrollment-service";
import { getApiErrorMessage, getCourseId } from "@/lib/api-error";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

export default function CoursePlayerPage() {
  const { courseId } = useParams();
  const [searchParams] = useSearchParams();
  const requestedLectureId = searchParams.get("lectureId");
  const { user } = useSelector((state) => state.auth);
  const [currentLectureId, setCurrentLectureId] = useState(requestedLectureId);
  const activeLectureRef = useRef(null);
  const { data: lectures = [], error, isLoading } = useFetchLecturesByCourseQuery(courseId);
  const { data: enrollments = [] } = useFetchUserEnrollmentsQuery(undefined, { skip: !user });
  const [markLectureComplete, { isLoading: isCompleting }] = useMarkLectureCompleteMutation();

  const enrollment = enrollments.find((item) => getCourseId(item.course) === courseId);
  const completedLectureIds = useMemo(
    () =>
      new Set(
        (enrollment?.completedLectures || []).map((lecture) =>
          typeof lecture === "object" ? lecture?._id : lecture,
        ),
      ),
    [enrollment],
  );
  const effectiveLectureId = currentLectureId || requestedLectureId;
  const currentLecture = lectures.find((lecture) => lecture._id === effectiveLectureId) || lectures[0];
  const currentIndex = lectures.findIndex((lecture) => lecture._id === currentLecture?._id);
  const isCurrentComplete = currentLecture ? completedLectureIds.has(currentLecture._id) : false;

  useEffect(() => {
    activeLectureRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [currentLecture?._id]);

  async function handleCompleteLecture() {
    if (!enrollment || !currentLecture) return;

    try {
      await markLectureComplete({ enrollmentId: enrollment._id, lectureId: currentLecture._id }).unwrap();
      toast.success("Lecture completed.", { position: "bottom-center" });
      const nextLecture = lectures[currentIndex + 1];
      if (nextLecture) setCurrentLectureId(nextLecture._id);
    } catch (completeError) {
      toast.error(getApiErrorMessage(completeError, "Failed to mark lecture complete."), {
        position: "bottom-center",
      });
    }
  }

  if (isLoading) {
    return (
      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <Skeleton className="h-[420px]" />
        <Skeleton className="h-[420px]" />
      </div>
    );
  }

  if (error) {
    return <p className="text-sm text-destructive">{getApiErrorMessage(error, "Unable to fetch lectures.")}</p>;
  }

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
      <Card>
        <CardHeader>
          <CardTitle>{currentLecture?.title || "Course player"}</CardTitle>
          <CardDescription>{currentLecture?.description || `Watching course ${courseId}`}</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid aspect-video place-items-center rounded-2xl bg-muted text-sm text-muted-foreground overflow-hidden">
            {currentLecture?.videoUrl ? (
              <ReactPlayer src={currentLecture.videoUrl} controls width="100%" height="100%" />
            ) : (
              <p>No video available for this lecture.</p>
            )}
          </div>
          {enrollment ? (
            <div className="grid gap-3">
              <Progress value={enrollment.progress || 0}>
                <ProgressLabel>Course progress</ProgressLabel>
                <ProgressValue>{enrollment.progress || 0}%</ProgressValue>
              </Progress>
              <Button onClick={handleCompleteLecture} disabled={!currentLecture || isCurrentComplete || isCompleting}>
                {isCompleting ? "Saving..." : isCurrentComplete ? "Lecture complete" : "Mark as Complete"}
              </Button>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm text-muted-foreground">Enroll to track progress for this course.</p>
              <Link to={`/courses/${courseId}`} className={buttonVariants()}>
                View course
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Lectures</CardTitle>
          <CardDescription>Navigate lectures and mark progress.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          {lectures.length === 0 ? (
            <p className="text-sm text-muted-foreground">No lectures available yet.</p>
          ) : (
            lectures.map((lecture, index) => {
              const isActive = lecture._id === currentLecture?._id;
              const isComplete = completedLectureIds.has(lecture._id);

              return (
                <button
                  type="button"
                  key={lecture._id}
                  ref={isActive ? activeLectureRef : null}
                  onClick={() => setCurrentLectureId(lecture._id)}
                  className={`flex items-start gap-2 rounded-2xl px-3 py-2 text-left text-sm transition-colors ${
                    isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  {isComplete ? <CheckCircle2 className="mt-0.5 size-4" /> : isActive ? <PlayCircle className="mt-0.5 size-4" /> : <Circle className="mt-0.5 size-4" />}
                  <span className="grid gap-1">
                    <span className="font-medium">
                      {index + 1}. {lecture.title}
                    </span>
                    <span className={isActive ? "text-primary-foreground/80" : "text-muted-foreground"}>
                      {lecture.duration || 0} min
                    </span>
                  </span>
                </button>
              );
            })
          )}
        </CardContent>
      </Card>
    </div>
  );
}
