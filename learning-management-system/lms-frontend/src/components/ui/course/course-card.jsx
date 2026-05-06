import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getInstructorName } from "@/lib/utils";
import { Link } from "react-router";

export function CourseCard({ course }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={course.thumbnail || "https://avatar.vercel.sh/shadcn1"}
        alt="course thumbnail"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>{course.title}</CardTitle>

        <CardDescription>{getInstructorName(course.instructor)}</CardDescription>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link to={`/courses/${course._id}`} className="w-full">
          <Button className="w-full">View Course</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
