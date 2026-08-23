import "./AssignmentCard.css";
import type { Assignment } from "../../../types/Assignment";
import type { Course } from "../../../types/Course";
import { formatDate } from "../../../utils/formatDate";
import { assignmentStatusLabels } from "../../../data/assignments/status";
import { getTimeUntilDue } from "../../../utils/getTimeUntilDue";

type AssignmentCardProps = {
  assignment: Assignment;
  course: Course;
};

function AssignmentCard({ assignment, course }: AssignmentCardProps) {
  return (
    <article className="assignment-card">
      <div className="assignment-card__header">
        <p className="assignment-card__course">{course.code}</p>
        <p className="assignment-card__status">
          {assignmentStatusLabels[assignment.status]}
        </p>
      </div>

      <h3 className="assignment-card__title">{assignment.title}</h3>

      <div className="assignment-card__deadline">
        <p>{formatDate(assignment.dueDate)}</p>
        <p>{getTimeUntilDue(assignment.dueDate)}</p>
      </div>
    </article>
  );
}

export default AssignmentCard;
