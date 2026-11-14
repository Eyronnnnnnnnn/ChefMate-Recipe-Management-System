import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CategoryChips from './components/CategoryChips'
import useFetch from './hooks/useFetch'

function App() {
  const { data,loading ,error} = useFetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
console.log(data)

if(!data ){return}

  return (
  <div className=''>
      <div>
       <Header/>
       <CategoryChips/>
      </div>
  </div>
  )
}

export default App
