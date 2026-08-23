import "./AssignmentList.css";
import AssignmentCard from "../AssignmentCard/AssignmentCard";
import { assignments } from "../../../data/assignments";
import { courses } from "../../../data/courses";

function AssignmentList() {
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