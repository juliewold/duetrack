export type Assignment = {
  id: string;
  courseId: string;
  title: string;
  dueDate: string;
  status: "not-started" | "in-progress" | "submitted";
};