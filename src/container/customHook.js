import React,{useState,useEffect}  from 'react'

//A custom Hook is a JavaScript function whose name 
//starts with ”use” and that may call other Hook
const  useConter =(props)=>{
    const [count,setCount] = useState(props)
    useEffect(()=>{
        //run  when count changes state
        //used to perfon sideeffect
       console.log('change')
    }   
    ,[count])
    function Increment(){
        setCount(count+1)
    }
    return [count,Increment]
}
export default useConter

