import React from "react";
function Prosp(props) {
    const handleClick=()=>{
        alert('Clicked')
    
    }
    return (
        <>
            Hello {props.name}
            <button onClick={()=>{handleClick()}}>
                Submit 
                </button>
                <input onChange={(e)=>{console.log(e.target.value)}}/>
        </>
    )
}
export default Prosp;