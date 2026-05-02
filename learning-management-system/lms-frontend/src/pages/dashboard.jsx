import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Student dashboard</CardTitle>
        <CardDescription>Track enrolled courses and progress percentages.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Your enrolled course progress will appear here.</p>
      </CardContent>
    </Card>
  );
}
