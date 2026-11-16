export default function RecipeCard({data,pic,categ,HandleFavoriteClick,idMeal,favorite}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-200">
      <div className="relative">
        <img
          src= {pic}
          alt="meal"
          className="w-full h-44 object-cover"
        />
        {favorite.includes(idMeal)? (
         <button
        onClick={()=>HandleFavoriteClick(idMeal)}
        className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow text-lg">
          ♥
        </button>
        ) : (
           <button
        onClick={()=>HandleFavoriteClick(idMeal)}
        className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow text-lg">
          ♡
        </button>
        )}
       
      </div>

      <div className="p-4">
        <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
        {categ}
        </span>
        <h3 className="mt-2 text-lg font-bold text-gray-800 truncate">
         {data}
        </h3>
        <p className="mt-1 text-sm text-amber-500">★ 4.5</p>
      </div>
    </div>
  );
}