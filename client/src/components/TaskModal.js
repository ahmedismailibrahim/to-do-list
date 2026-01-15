import { useState } from "react";
import { Plus, X } from "lucide-react";

//task Modal Component (Unified for Add/Edit)
function TaskModal({ mode = "add", task, onClose, onSave }) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");

  const handleSubmit = () => {
    if (title.trim()) {
      onSave({ title, description });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const isAddMode = mode === "add";

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div className="bg-slate-800 rounded-3xl p-8 max-w-2xl w-full shadow-2xl border border-slate-700/50 relative animate-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-700 rounded-lg"
        >
          <X size={24} />
        </button>

        <h2 className="text-3xl font-bold text-white mb-8">
          {isAddMode ? "Add New Task" : "Edit Task"}
        </h2>

        <div>
          <input
            type="text"
            placeholder="Task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full bg-slate-700/50 text-white rounded-xl px-6 py-4 mb-5 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500 text-lg transition-all duration-200"
            autoFocus
          />

          <textarea
            placeholder="Task description (optional)..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-slate-700/50 text-white rounded-xl px-6 py-4 mb-6 h-36 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-500 resize-none transition-all duration-200"
          />

          <div className="flex gap-4">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
            >
              <Plus size={20} />
              {isAddMode ? "Add Task" : "Save Changes"}
            </button>
            <button
              onClick={onClose}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-xl font-bold transition-all duration-200 border border-slate-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
