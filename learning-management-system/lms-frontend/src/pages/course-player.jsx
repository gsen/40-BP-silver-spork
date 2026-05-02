import { useParams } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CoursePlayerPage() {
  const { courseId } = useParams();

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
      <Card>
        <CardHeader>
          <CardTitle>Course player</CardTitle>
          <CardDescription>Watching course {courseId}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid aspect-video place-items-center rounded-lg bg-muted text-sm text-muted-foreground">
            Video player
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Lectures</CardTitle>
          <CardDescription>Navigate lectures and mark progress.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Lecture sidebar will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
