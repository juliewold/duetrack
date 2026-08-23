import type { Assignment } from "../../types/Assignment";
import type { Course } from "../../types/Course";

type AssignmentCardProps = {
  assignment: Assignment;
  course: Course;
};

function AssignmentCard({ assignment, course }: AssignmentCardProps) {
  return (
    <article>
      <p>{course.code}</p>
      <h3>{assignment.title}</h3>
      <p>{assignment.dueDate}</p>
      <p>{assignment.status}</p>
    </article>
  );
}

export default AssignmentCard;