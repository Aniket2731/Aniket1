import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

function LocalStore() {
    const[data,setdata]=React.useState('')
    const dothis=(e,type)=>{
        if (type=='name'){
            console.log(e.target.value)
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default LocalStore
