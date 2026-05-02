import { Link, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CourseDetailsPage() {
  const { id } = useParams();

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <section className="grid gap-4">
        <p className="text-sm font-medium text-muted-foreground">Course</p>
        <h1 className="text-3xl font-semibold tracking-normal">Course details</h1>
        <p className="text-muted-foreground">
          View the course description, instructor details, and preview lectures for <span className="font-medium text-foreground">{id}</span>.
        </p>
      </section>

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
