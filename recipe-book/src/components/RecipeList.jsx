import RecipeCard from "./RecipeCard"

export default function RecipeList({data,HandleFavoriteClick}){
    return(
        <div className="w-full px-12 py-8">
            <div className="flex justify-between items-center mb-6">
                <div>
                   <h1 className="text-2xl font-bold">Popular Recipes</h1>
                </div>
                <div>
                    <span className="text-sm text-gray-500">{data.meals.length} Recipes</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.meals.map((meal)=>(
                      <RecipeCard key={meal.idMeal}
                    data = {meal.strMeal}
                    idMeal = {meal.idMeal}
                    pic = {meal.strMealThumb}
                    categ = {meal.strCategory}
                    HandleFavoriteClick = {HandleFavoriteClick}
                />
                ))}
               
            </div>
        </div>
    )
}