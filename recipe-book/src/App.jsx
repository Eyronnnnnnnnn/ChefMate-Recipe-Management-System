import { useMemo, useState } from 'react'
import './App.css'
import Header from './components/Header'
import CategoryChips from './components/CategoryChips'
import RecipeList from './components/RecipeList'
import useFetch from './hooks/useFetch'
import useDebounce from './hooks/useDebounce'


function App() {
  const { data,loading ,error} = useFetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
  const [search , setSearch] = useState("")
console.log(data)

const [favorite , setFavorite] = useState([]);
console.log(favorite);
 const debounceSearch = useDebounce(search,500)

 
const filteredSearch = useMemo(()=>{
return (data?.meals || []).filter((recipe)=>(
  recipe.strMeal.toLowerCase().includes(debounceSearch.toLocaleLowerCase())
))
},[data,debounceSearch])


if(!data ){return}

 const HandleFavoriteClick = (id)=>{
  if (favorite.includes(id)){
    setFavorite( favorite.filter((fav)=> fav !== id))
  }else{
  setFavorite([...favorite , id])
  }
 }






  return (
  <div className=''>
      <div>
       <Header
       favorite = {favorite}
       />
       <CategoryChips
       setSearch = {setSearch}
       search = {search}
       />
       <RecipeList
       search = {search}
       favorite = {favorite}
       HandleFavoriteClick ={HandleFavoriteClick}
       data = { data}
       filteredSearch={filteredSearch}
       />
      </div>
  </div>
  ) 
}

export default App
