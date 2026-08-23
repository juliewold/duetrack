import type { Assignment } from "../../types/Assignment";

type AssignmentCardProps = {
  assignment: Assignment;
};

function AssignmentCard({ assignment }: AssignmentCardProps) {
  return (
    <article>
      <h3>{assignment.title}</h3>
      <p>{assignment.dueDate}</p>
      <p>{assignment.status}</p>
    </article>
  );
}

export default AssignmentCard;
