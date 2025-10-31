import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import useTasks from "./hooks/useTask";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToogle";

export default function App() {
  const { theme } = useContext(ThemeContext);
  const { tasks, addTask, toggleTaskStatus, deleteTask } = useTasks();

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <header className="app-header">
          <h1>📝 My Task Manager</h1>
          <ThemeToggle />
        </header>

        <main className="app-content">
          <TaskForm onAddTask={addTask} />
          <TaskList
            tasks={tasks}
            onToggle={toggleTaskStatus}
            onDelete={deleteTask}
          />
        </main>

        <footer className="app-footer">
          <p>
            Total Tasks: {tasks.length} &nbsp;|&nbsp; Active:{" "}
            {tasks.filter((t) => !t.completed).length} &nbsp;|&nbsp; Completed:{" "}
            {tasks.filter((t) => t.completed).length}
          </p>
        </footer>
      </div>
    </div>
  );
}
