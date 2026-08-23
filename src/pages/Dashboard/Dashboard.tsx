import "./Dashboard.css";
import AssignmentList from "../../components/assignments/AssignmentList/AssignmentList";

function Dashboard() {
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

        <AssignmentList />
      </section>
    </main>
  );
}

export default Dashboard;
