export type AssignmentStatus = "not-started" | "in-progress" | "submitted";

export type Assignment = {
  id: string;
  courseId: string;
  title: string;
  dueDate: string;
  status: AssignmentStatus;
};