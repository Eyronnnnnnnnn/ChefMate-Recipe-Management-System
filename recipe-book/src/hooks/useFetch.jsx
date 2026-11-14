    import {useState,useEffect} from "react"

    function useFetch(url){
        const [data ,setData] = useState(null)
        const[loading,setLoading] = useState(true)
        const[error , setError] = useState(null)

        useEffect(()=>{

        const Fetchdata = async()=>{

            try{
            const response = await fetch(url)

            if(!response.ok){
                throw new Error("Failed to fetch Data")
            }

            const Getresponse = await response.json()
            setData(Getresponse);
            setLoading(false)
            }catch(error){
                setLoading(false)
                setError(error)
                console.log(error)
            }
           
        }

          Fetchdata()
        },[url])
    
         return {data,loading, error}
    }


    export default useFetch;