import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateCourseMutation } from "@/store/services/course-service";
import { getApiErrorMessage } from "@/lib/api-error";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function CreateCoursePage() {
  const navigate = useNavigate();
  const [createCourse, { isLoading }] = useCreateCourseMutation();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const course = await createCourse({
        title: formData.get("title"),
        description: formData.get("description"),
        thumbnail: formData.get("thumbnail"),
      }).unwrap();
      toast.success("Course created.", { position: "bottom-center" });
      navigate(`/courses/${course._id}`);
    } catch (error) {
      toast.error(getApiErrorMessage(error, "Unable to create course."), { position: "bottom-center" });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create course</CardTitle>
        <CardDescription>Add a title, description, and thumbnail for a new course.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input id="title" name="title" placeholder="React Fundamentals" />
            </Field>
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Textarea id="description" name="description" placeholder="What students will learn" />
            </Field>
            <Field>
              <FieldLabel htmlFor="thumbnail">Thumbnail</FieldLabel>
              <Input id="thumbnail" name="thumbnail" placeholder="https://example.com/course.jpg" />
            </Field>
          </FieldGroup>
          <Button type="submit" className="w-fit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create course"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
