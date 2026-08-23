import "./App.css";
import AssignmentCard from "./components/assignments/AssignmentCard";
import { it1901Assignments } from "./data/assignments";

function App() {
  return (
    <main>
      <h1>DueTrack</h1>
      <p>Hold oversikt over innleveringsfristene dine.</p>

      <section>
        <h2>Innleveringer</h2>

        {it1901Assignments.map((assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </section>
    </main>
  );
}

export default App;
