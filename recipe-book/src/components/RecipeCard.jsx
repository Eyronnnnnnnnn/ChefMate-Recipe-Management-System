export default function RecipeCard({data}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-200">
      <div className="relative">
        <img
          src="https://via.placeholder.com/300x200"
          alt="meal"
          className="w-full h-44 object-cover"
        />
        <button className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow text-lg">
          ♡
        </button>
      </div>

      <div className="p-4">
        <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
          Category
        </span>
        <h3 className="mt-2 text-lg font-bold text-gray-800 truncate">
         {data}
        </h3>
        <p className="mt-1 text-sm text-amber-500">★ 4.5</p>
      </div>
    </div>
  );
}