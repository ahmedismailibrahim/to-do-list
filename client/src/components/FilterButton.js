// filter Button Component
function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
        active 
          ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20' 
          : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 border border-slate-600/50'
      }`}
    >
      {children}
    </button>
  );
}

export default FilterButton;