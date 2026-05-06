import { useParams, useSearchParams } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ReactPlayer from "react-player";

export default function CoursePlayerPage() {
  const { courseId } = useParams();
  const [searchParams] = useSearchParams();
  console.log("Selected lecture ID:", searchParams.get("lectureId"));

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
      <Card>
        <CardHeader>
          <CardTitle>Course player</CardTitle>
          <CardDescription>Watching course {courseId}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid aspect-video place-items-center rounded-2xl bg-muted text-sm text-muted-foreground overflow-hidden">
            {/* <video controls className="w-full h-full">
              <source src={"https://youtu.be/ghizFgNl1LY?si=yoFZKNopB_smQ0zC"} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <ReactPlayer src={"https://youtu.be/ghizFgNl1LY?si=yoFZKNopB_smQ0zC"} controls width="100%" height="100%" />
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
