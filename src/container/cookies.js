import React  from  'react'
import useCounter from  './customHook'

const  Cookies  = ()=>{
    const [count,Increment] =useCounter(0)    
    return(
        <>     
        <p>Cookies:{count}</p>
        <button onClick={()=>Increment()}>Add</button>
        </>
    )
}
export  default Cookies