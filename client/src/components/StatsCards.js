 // stats Cards Component
 import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

 import StatCard from "./StatCard";

function StatsCards({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatCard number={total} label="Total Tasks" color="text-emerald-400" bgColor="bg-emerald-500/10" />
      <StatCard number={completed} label="Completed" color="text-blue-400" bgColor="bg-blue-500/10" />
      <StatCard number={pending} label="Pending" color="text-amber-400" bgColor="bg-amber-500/10" />
    </div>
  );
}

export default StatsCards;