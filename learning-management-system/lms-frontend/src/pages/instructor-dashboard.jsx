import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function InstructorDashboardPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Instructor dashboard</CardTitle>
        <CardDescription>Review created courses and total student counts.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Instructor metrics will appear here.</p>
      </CardContent>
    </Card>
  );
}
