import { useEffect, useState } from "react";
import axios from "axios";

import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("all");

  // Fetch tasks from backend using axios

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const addTask = (task) => {
    try {
      const createTask = async () => {
        const response = await axios.post("http://localhost:5000/", task);
        setTasks([response.data, ...tasks]);
      };
      createTask();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const toggleTask = (id) => {
    try {
      const toggleTaskCompletion = async () => {
        const taskToToggle = tasks.find((task) => task._id === id);
        if (!taskToToggle) return;

        const response = await axios.put(`http://localhost:5000/${id}`, {
          ...taskToToggle,
          completed: !taskToToggle.completed,
        });
        setTasks(
          tasks.map((task) =>
            task._id === id
              ? { ...task, completed: response.data.completed }
              : task
          )
        );
      };
      toggleTaskCompletion();
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  const deleteTask = (id) => {
    try {
      const deleteTaskById = async () => {
        await axios.delete(`http://localhost:5000/${id}`);
        setTasks(tasks.filter((task) => task._id !== id));
      };
      deleteTaskById();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const editTask = (id, updatedTask) => {
    try {
      const editTaskById = async () => {
        const response = await axios.put(
          `http://localhost:5000/${id}`,
          updatedTask
        );
        setTasks(
          tasks.map((task) =>
            task._id === id ? { ...task, ...response.data } : task
          )
        );
      };
      editTaskById();
    } catch (error) {
      console.error("Error editing task:", error);
    }
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
