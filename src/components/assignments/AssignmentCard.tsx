import type { Assignment } from "../../types/Assignment";
import type { Course } from "../../types/Course";
import { formatDate } from "../../utils/formatDate";
import { assignmentStatusLabels } from "../../data/assignments/status";
import { getTimeUntilDue } from "../../utils/getTimeUntilDue";

type AssignmentCardProps = {
  assignment: Assignment;
  course: Course;
};

function AssignmentCard({ assignment, course }: AssignmentCardProps) {
  return (
    <article>
      <p>{course.code}</p>
      <h3>{assignment.title}</h3>
      <p>{getTimeUntilDue(assignment.dueDate)}</p>
      <p>{assignmentStatusLabels[assignment.status]}</p>
    </article>
  );
}

export default AssignmentCard;
