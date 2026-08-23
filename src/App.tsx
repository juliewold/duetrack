import "./App.css";
import AssignmentList from "./components/assignments/AssignmentList";

function App() {
  return (
    <main>
      <h1>DueTrack</h1>
      <p>Hold oversikt over innleveringsfristene dine.</p>

      <section>
        <h2>Innleveringer</h2>
        <AssignmentList />
      </section>
    </main>
  );
}

export default App;