import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CategoryChips from './components/CategoryChips'
import RecipeList from './components/RecipeList'
import useFetch from './hooks/useFetch'


function App() {
  const { data,loading ,error} = useFetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
console.log(data)

const [favorite , setFavorite] = useState([]);

if(!data ){return}

 const HandleFavoriteClick = (id)=>{
  if (favorite.includes(id)){

  }
 }

  return (
  <div className=''>
      <div>
       <Header/>
       <CategoryChips/>
       <RecipeList
       data = { data}
       />
      </div>
  </div>
  )
}

export default App
