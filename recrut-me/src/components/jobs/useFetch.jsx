import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
   
  useEffect(() => {
      const     abortCont =new AbortController();
    fetch(url,{signal: abortCont.signal})
      .then(res=>{
          if(!res.ok)
              throw Error('could not fetch data from the resource');
          return res.json();
      })
      .then(data=>{
          setData(data);   
          setIsPending(false); 
          setError(null);
      })   
      .catch(err=>{
          if(err.name==='AbortError'){
              console.log('abort');
          }
          setIsPending(false);
          setError(err.message);
      })
    return ()=>abortCont.abort();
}, [url]); 
return({data,isPending,error});
}

export default useFetch;