import type { AssignmentStatus } from "../../types/Assignment";

export const assignmentStatusLabels: Record<AssignmentStatus, string> = {
  "not-started": "Ikke startet",
  "in-progress": "Pågår",
  submitted: "Levert",
};