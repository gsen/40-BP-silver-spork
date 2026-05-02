import { useEffect, useState } from "react";
import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllCourses } from "@/api/course-service";
import { cn } from "@/lib/utils";

function getInstructorName(instructor) {
  if (!instructor) {
    return "Instructor";
  }

  const fullName = [instructor.firstName, instructor.lastName].filter(Boolean).join(" ");
  return fullName || instructor.email || "Instructor";
}

export default function HomePage() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadCourses() {
      try {
        const courses = await getAllCourses();

        if (isMounted) {
          setCourses(courses ?? []);
          setError("");
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadCourses();

    return () => {
      isMounted = false;
    };
  }, []);

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

        {!isLoading && error && <p className="text-sm text-destructive md:col-span-3">{error}</p>}

        {!isLoading && !error && courses.length === 0 && (
          <p className="text-sm text-muted-foreground md:col-span-3">No courses available yet.</p>
        )}

        {!isLoading && !error && courses.map((course) => (
          <Card key={course._id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{getInstructorName(course.instructor)}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <p className="text-sm text-muted-foreground">{course.description}</p>
              <Link to={`/courses/${course._id}`} className={cn(buttonVariants(), "w-fit")}>
                View course
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
