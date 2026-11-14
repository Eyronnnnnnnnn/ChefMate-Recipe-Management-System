export default function CategoryChips(){
    return(
        <div className="bg-amber-500 w-full h-40 flex justify-center">
          <div className="bg-red-700 w-160 h-full flex flex-col justify-center gap-7 ">
            <div className="bg-green-400">
                 <input
                 className="w-160 h-10 rounded-xl border border-gray-500 pl-5"
                 placeholder="hello world"
                 type="text" />
            </div>
            <div>
                <div>
                    <h1>Welcome to Recipe Books</h1>
                </div>
            </div>
          </div>
        </div>
    )
}