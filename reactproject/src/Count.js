import React from 'react'

function Count() {
    const[count,setCount]=React.useState(0)
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      {count}
      <button onClick={()=>{count(count-1)}}>-</button>
    </div>
  )
}
export default Count 