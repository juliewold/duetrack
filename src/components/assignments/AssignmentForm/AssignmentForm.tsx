import { useState } from "react";
import "./AssignmentForm.css";
import { courses } from "../../../data/courses";
import type { Assignment } from "../../../types/Assignment";

type AssignmentFormProps = {
  onAddAssignment: (assignment: Assignment) => void;
};

function AssignmentForm({ onAddAssignment }: AssignmentFormProps) {
  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title || !courseId || !dueDate) {
      return;
    }

    const newAssignment: Assignment = {
      id: crypto.randomUUID(),
      courseId,
      title,
      dueDate,
      status: "not-started",
    };

    onAddAssignment(newAssignment);

    setTitle("");
    setCourseId("");
    setDueDate("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Oppgavenavn</label>

      <input
        id="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="course">Fag</label>

      <select
        id="course"
        value={courseId}
        onChange={(event) => setCourseId(event.target.value)}
      >
        <option value="">Velg fag</option>

        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.code} – {course.name}
          </option>
        ))}
      </select>

      <label htmlFor="dueDate">Frist</label>

      <input
        id="dueDate"
        type="datetime-local"
        value={dueDate}
        onChange={(event) => setDueDate(event.target.value)}
      />

      <button type="submit">Legg til innlevering</button>
    </form>
  );
}

export default AssignmentForm;
