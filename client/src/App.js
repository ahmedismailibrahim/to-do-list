import { useEffect, useState } from "react";
import axios from "axios";


import FilterBar from "./components/FilterBar";
import FiterButton from "./components/FilterButton";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import StatCard from "./components/StatCard";
import TaskItem from "./components/TaskItem";
import TaskList from "./components/TaskList";
import TaskModal from "./components/TaskModal";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("all");

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Header />
        <StatsCards tasks={tasks} />
        <FilterBar filter={filter} setFilter={setFilter} onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          filter={filter}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      </div>
    </div>
  );
}
