import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete }) {
  const activeTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);

  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <h2>My Tasks</h2>
        <div className="empty-state">
          <p>No tasks yet! Add your first task above.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="task-list">
      <h2>My Tasks</h2>

      {activeTasks.length > 0 && (
        <div className="task-section">
          <h3>Active Tasks ({activeTasks.length})</h3>
          {activeTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}

      {completedTasks.length > 0 && (
        <div className="task-section">
          <h3>Completed Tasks ({completedTasks.length})</h3>
          {completedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}
