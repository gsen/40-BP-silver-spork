import { Link, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useFetchCourseByIdQuery } from "@/store/services/course-service";
import { getInstructorName } from "@/lib/utils";
import { LectureTable } from "@/components/ui/lecture/lecture";

export default function CourseDetailsPage() {
  const { id } = useParams();

  const { data: course, error, isLoading } = useFetchCourseByIdQuery(id);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <article className="grid grid-rows-2 gap-4">
        <section className="bg-amber-100 grid gap-2 p-4 rounded-sm">
          <h1 className="text-3xl font-semibold tracking-normal">{course?.title}</h1>
          <h2 className="text-muted-foreground">{course?.description}</h2>
          <h2>
            Created by - <span className="font-medium">{getInstructorName(course?.instructor)}</span>
          </h2>
          <p>
            Total Students: <span className="font-medium">{course?.totalStudents}</span>
          </p>
        </section>
        <section className="p-4 grid gap-4">
          <h2 className="text-2xl font-semibold">Course Content</h2>
          <LectureTable lectures={course?.lectures || []} />
        </section>
      </article>

      <Card>
        <CardHeader>
          <CardTitle>Start learning</CardTitle>
          <CardDescription>Enroll to unlock the full lecture player and progress tracking.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3">
          <Button>Enroll now</Button>
          <Link to={`/player/${id}`} className={buttonVariants({ variant: "secondary" })}>
            Preview player
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
