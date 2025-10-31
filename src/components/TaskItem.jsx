import React from "react";

export default function TaskItem({ task, onToggle, onDelete }) {
  const priorityColors = {
    Low: "#10b981",
    Medium: "#f59e0b",
    High: "#ef4444",
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        <div className="task-header">
          <h3>{task.title}</h3>
          <span
            className="priority-badge"
            style={{ backgroundColor: priorityColors[task.priority] }}
          >
            {task.priority}
          </span>
        </div>

        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
      </div>

      <div className="task-actions">
        <button
          className={task.completed ? "btn-undo" : "btn-complete"}
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? "↩ Undo" : "✓ Done"}
        </button>

        <button className="btn-delete" onClick={() => onDelete(task.id)}>
          🗑 Delete
        </button>
      </div>
    </div>
  );
}
