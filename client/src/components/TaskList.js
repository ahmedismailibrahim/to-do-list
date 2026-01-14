 import React from 'react';
import TaskItem from './TaskItem';
 //task List Component
function TaskList({ tasks, filter, onToggle, onDelete, onEdit }) {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-gray-500 text-xl mb-2">No tasks found</div>
        <div className="text-gray-600 text-sm">Create a new task to get started!</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredTasks.map(task => (
        <TaskItem 
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}
export default TaskList;
 