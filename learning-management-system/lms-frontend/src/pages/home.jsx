import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useFetchAllCoursesQuery } from "@/store/services/course-service";
import { CourseCard } from "@/components/ui/course/course-card";

export default function HomePage() {
  const { data: courses, error, isLoading } = useFetchAllCoursesQuery();
  const errorMessage = error?.data?.message || error?.error || "Unable to fetch courses.";

  return (
    <div className="grid gap-8">
      <section className="grid gap-4">
        <p className="text-sm font-medium text-muted-foreground">Learn at your pace</p>
        <div className="grid gap-3">
          <h1 className="text-3xl font-semibold tracking-normal md:text-5xl">Explore practical courses</h1>
          <p className="max-w-2xl text-muted-foreground">
            Browse courses, enroll as a student, or create curriculum as an instructor.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {isLoading && <p className="text-sm text-muted-foreground md:col-span-3">Loading courses...</p>}

        {!isLoading && error && <p className="text-sm text-destructive md:col-span-3">{errorMessage}</p>}

        {!isLoading && !error && courses.length === 0 && (
          <p className="text-sm text-muted-foreground md:col-span-3">No courses available yet.</p>
        )}

        {!isLoading && !error && courses.map((course) => <CourseCard key={course.id} course={course} />)}
      </section>
    </div>
  );
}
