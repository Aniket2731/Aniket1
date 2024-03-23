import React from 'react'
import './App.css'
let course='react'
function Test(props) {
    console.log(props)
    const handleClick=()=>{
        alert('clicked')
    }
    const handleChange=(e)=>{
    console.log(e.target.value)
    }
  return (
    <div className='App'>
        <h1>Login Here</h1>
      {/* Hello {props.name} */}
      {/* <h1>selected course{props.course}</h1> */}
      <label>
        name
      </label>
      <input onChange={(e)=>{handleChange(e)}}></input>
      <br></br>
      <label>
        password
      </label>
      <input onChange={(e)=>{handleChange(e)}}></input>
      <br></br>
      <button onClick={()=>{alert('submit')}}>Submitted</button>
    </div>
  )
}

export default Test
