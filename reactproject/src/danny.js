import React from 'react'

function Danny() {
    const [count,setCount]=React.useState(1)
  const [count1, setCount1] = React.useState(0)

  return (
    <div>
        <button onClick={()=> {if(count<49){setCount(count+2)}}}>+</button>
        {count}
        <button onClick={()=> {if(count>1){setCount(count-2)}}}>-</button>
        <br></br>
        <button onClick={()=>{if(count1<50){setCount1(count1+2)}}}>+</button>
        {count1}
        <button onClick={()=>{if(count1>0){setCount1(count1-2)}}}>-</button>
      </div>
  )
}

export default Danny

