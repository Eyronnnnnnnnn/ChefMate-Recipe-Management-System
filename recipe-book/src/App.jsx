import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const { data,loading ,error} = useFetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
console.log(data)

if(!data ){return}

  return (
  <div className=''>
      <div>
        {data.meals.map((data)=>(
          <div key={data.idMeal}>
            <p>{data.strMeal}</p>
          </div>
        ))}
      </div>
  </div>
  )
}

export default App
