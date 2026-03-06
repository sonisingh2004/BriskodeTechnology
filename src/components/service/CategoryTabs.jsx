// @ts-nocheck
export default function CategoryTabs({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategoryChange(category.name)}
          className={`group px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 flex items-center gap-2 ${
            activeCategory === category.name
              ? 'bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
          </svg>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}
