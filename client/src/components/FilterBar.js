import { useState } from "react";
import { Plus } from "lucide-react"; 

import FilterButton from "./FilterButton";
import TaskModal from "./TaskModal";

// Filter Bar Component
function FilterBar({ filter, setFilter, onAddTask }) {
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (taskData) => {
    onAddTask({
      ...taskData,
      completed: false,
    });

    setShowModal(false);
  };


  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex gap-3">
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            All
          </FilterButton>
          <FilterButton
            active={filter === "pending"}
            onClick={() => setFilter("pending")}
          >
            Pending
          </FilterButton>
          <FilterButton
            active={filter === "completed"}
            onClick={() => setFilter("completed")}
          >
            Completed
          </FilterButton>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
        >
          <Plus size={20} />
          Add New Task
        </button>
      </div>

      {showModal && (
        <TaskModal
          mode="add"
          onClose={() => setShowModal(false)}
          onSave={handleAddTask}
        />
      )}
    </>
  );
}

export default FilterBar;
