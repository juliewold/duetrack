import { useState } from "react";
import "./Dashboard.css";
import AssignmentForm from "../../components/assignments/AssignmentForm/AssignmentForm";
import AssignmentList from "../../components/assignments/AssignmentList/AssignmentList";
import { assignments as initialAssignments } from "../../data/assignments";
import type { Assignment } from "../../types/Assignment";

function Dashboard() {
  const [assignments, setAssignments] =
    useState<Assignment[]>(initialAssignments);

  function handleAddAssignment(assignment: Assignment) {
    setAssignments((currentAssignments) => [...currentAssignments, assignment]);
  }

  return (
    <main className="dashboard">
      <header className="dashboard__header">
        <div>
          <h1 className="dashboard__title">Frister</h1>
          <p className="dashboard__subtitle">
            Hold oversikt over innleveringsfristene dine.
          </p>
        </div>
      </header>

      <section className="dashboard__assignments">
        <div className="dashboard__section-header">
          <h2 className="dashboard__section-title">Innleveringer</h2>
        </div>

        <AssignmentForm onAddAssignment={handleAddAssignment} />
        <AssignmentList assignments={assignments} />
      </section>
    </main>
  );
}

export default Dashboard;