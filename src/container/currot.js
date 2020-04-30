import React  from  'react'
import useCounter from  './customHook'

const  Currots  = ()=>{
    const [count,Increment] =useCounter(0) 
    return(
        <>     
        <p>Currots:{count}</p>
        <button onClick={()=>Increment()}>Add</button>
        </>
    )
}
export  default  Currots