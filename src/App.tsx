import "./App.css";
import AssignmentCard from "./components/assignments/AssignmentCard";
import { courses } from "./data/courses";
import { assignments } from "./data/assignments";

function App() {
  return (
    <main>
      <h1>DueTrack</h1>
      <p>Hold oversikt over innleveringsfristene dine.</p>

      <section>
        <h2>Innleveringer</h2>

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
      </section>
    </main>
  );
}

export default App;
