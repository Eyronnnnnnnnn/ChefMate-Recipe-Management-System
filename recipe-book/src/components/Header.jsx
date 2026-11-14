export default function Header (){
    return(
      
            <div className="bg-amber-300 w-screen h-24 pl-24 flex">
                <div className="bg-red-500 w-230 h-full flex item-center">

                    <div>

                    </div>

                    <div className="bg-green-500 flex r items-center">
                        <h1 className="text-3xl font-bold text-center">Recipe Book</h1>
                    </div>
                </div>
                <div className="bg-amber-800 h-full w-103 flex items-center">
                  <div>
                    <button>All</button>
                  </div>
                   <div>
                    <button>Favorite</button>
                   </div>
                    <div>
                        <button>My Recipe</button>
                    </div>
                </div>
            </div>
       
    )
}