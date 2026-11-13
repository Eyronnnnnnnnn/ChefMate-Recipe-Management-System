import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const { data,loading ,error} = useFetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
console.log(data)
  return (
  <div className=''>
    <h1>recipe data : </h1>
    <p></p>
  </div>
  )
}

export default App
