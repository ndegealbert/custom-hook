import  React from  'react'
import useCounter from  './customHook'

const  Beer = ()=>{
const [count,Increment] =useCounter(0) 
 return(
     <div>
         <p>beer:{count}</p>
         <button onClick={() =>Increment()}>Add</button>
     </div>
 )

}
export  default Beer