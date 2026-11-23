import { useEffect,useState } from "react";

function useDebounce(value,delay){

const [debounceValue,setdebounceValue] = useState(value);

  useEffect(()=>{

    const timer = setTimeout(()=>{
       setdebounceValue(value);
    },delay)


     return ()=>{
        clearInterval(timer)
     }

  },[value,delay])

  return debounceValue

}


export default useDebounce