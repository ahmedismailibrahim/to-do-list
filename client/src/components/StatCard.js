import react from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

// Individual Stat Card
function StatCard({ number, label, color, bgColor }) {
  return (
    <div className={`${bgColor} backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-105`}>
      <div className={`text-5xl font-bold ${color} mb-2`}>{number}</div>
      <div className="text-gray-400 text-base font-medium">{label}</div>
    </div>
  );
}

export default StatCard;