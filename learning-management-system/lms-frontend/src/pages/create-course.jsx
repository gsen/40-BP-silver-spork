import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function CreateCoursePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create course</CardTitle>
        <CardDescription>Add a title, description, and thumbnail for a new course.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input id="title" name="title" placeholder="React Fundamentals" />
            </Field>
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Input id="description" name="description" placeholder="What students will learn" />
            </Field>
            <Field>
              <FieldLabel htmlFor="thumbnail">Thumbnail</FieldLabel>
              <Input id="thumbnail" name="thumbnail" type="file" accept="image/*" />
            </Field>
          </FieldGroup>
          <Button type="submit" className="w-fit">Create course</Button>
        </form>
      </CardContent>
    </Card>
  );
}
