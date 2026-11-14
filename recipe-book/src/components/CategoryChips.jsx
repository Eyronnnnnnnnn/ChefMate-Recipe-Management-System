export default function CategoryChips(){
    return(
        <div className=" w-full h-40 flex justify-center">
          <div className=" w-160 h-full flex flex-col justify-center gap-7 ">
            <div className="">
                 <input
                 className="w-160 h-10 rounded-xl border border-gray-500 pl-5"
                 placeholder="Search Recipes.."
                 type="text" />
            </div>
            <div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Welcome to Recipe Books</h1>
                </div>
            </div>
          </div>
        </div>
    )
}