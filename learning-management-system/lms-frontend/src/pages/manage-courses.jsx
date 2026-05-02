import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ManageCoursesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage courses</CardTitle>
        <CardDescription>Edit courses, delete courses, and add lectures.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Created courses and lecture controls will appear here.</p>
      </CardContent>
    </Card>
  );
}
