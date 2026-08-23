import "./AssignmentList.css";
import AssignmentCard from "../AssignmentCard/AssignmentCard";
import { courses } from "../../../data/courses";
import type { Assignment } from "../../../types/Assignment";

type AssignmentListProps = {
  assignments: Assignment[];
};

function AssignmentList({ assignments }: AssignmentListProps) {
  return (
    <div className="assignment-list">
      {assignments.map((assignment) => {
        const course = courses.find(
          (course) => course.id === assignment.courseId,
        );

        if (!course) {
          return null;
        }

        return (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            course={course}
          />
        );
      })}
    </div>
  );
}

export default AssignmentList;