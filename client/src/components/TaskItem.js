import React from 'react';
import { useEffect, useState } from "react";
import { Plus, Edit2, Trash2, Check, X } from 'lucide-react';
import TaskModal from './TaskModal';

//task Item Component
function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (updatedData) => {
    onEdit(task.id, {
      ...updatedData,
      updatedAt: new Date().toLocaleDateString()
    });
    setIsEditing(false);
  };

  return (
    <>
      <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20">
        <div className="flex items-start gap-4">
          <button
            onClick={() => onToggle(task.id)}
            className={`mt-1 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
              task.completed 
                ? 'bg-emerald-500 border-emerald-500 shadow-lg shadow-emerald-500/30' 
                : 'border-slate-600 hover:border-emerald-500/50 hover:bg-slate-700/50'
            }`}
          >
            {task.completed && (
              <Check size={16} className="text-white" strokeWidth={3} />
            )}
          </button>
          
          <div className="flex-1 min-w-0">
            <h3 className={`text-xl font-semibold mb-2 transition-all duration-200 ${
              task.completed ? 'text-gray-500 line-through' : 'text-white'
            }`}>
              {task.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3 leading-relaxed">{task.description}</p>
            <div className="flex items-center gap-3 text-gray-500 text-xs">
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                Created: {task.createdAt}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                Updated: {task.updatedAt}
              </span>
            </div>
          </div>
          
          <div className="flex gap-2 flex-shrink-0">
            <button 
              onClick={() => setIsEditing(true)}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-blue-500/10 rounded-lg"
              title="Edit task"
            >
              <Edit2 size={18} />
            </button>
            <button 
              onClick={() => onDelete(task.id)}
              className="text-gray-400 hover:text-red-400 transition-colors duration-200 p-2 hover:bg-red-500/10 rounded-lg"
              title="Delete task"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
      
      {isEditing && (
        <TaskModal 
          mode="edit"
          task={task}
          onClose={() => setIsEditing(false)}
          onSave={handleEdit}
        />
      )}
    </>
  );
}

export default TaskItem;