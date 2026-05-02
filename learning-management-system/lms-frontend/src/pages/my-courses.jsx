import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function MyCoursesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My courses</CardTitle>
        <CardDescription>View courses you are enrolled in.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Enrolled courses will appear here after enrollment.</p>
      </CardContent>
    </Card>
  );
}
