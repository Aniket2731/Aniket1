import React from 'react'

function Expense() {
  const[Data , setData]=React.useState({})
  const[Array,setArray]=React.useState([])

  const handleChange = (e,type)=>{
      if(type === 'reason'){
          setData({...Data,reason:e.target.value})
      }
      else if(type === 'amount'){
          setData({...Data,amount:e.target.value})
      }
      else if(type === 'Credit/debit'){
        setData({...Data,credit:e.target.value})
      }
  }
  const handleClick=()=>{
setArray([...Array,Data])
Array.push(Data)
console.log(Array)
  }

  return (
    <>
        {/* <table>
      <tr><th>reason</th></tr>
      <tr><th>amount</th></tr>
      <tr><th>credit/debit</th></tr>
       {Array && Array.map((val)=>(
       <tr><td>{val.reason}</td>
      
    <td>{val.amount}</td>
    <td>{val.credit}</td></tr>
    ))} 
    </table> */}
        <label>Reason:</label>
      <input type="text" onChange={(e)=>{handleChange(e,'reason')}} />
      <label>amount:</label>
      <input type="text"onChange={(e)=>{handleChange(e,'amount')}} />
      <label>Credit/debit:</label>
      <input type="text" onChange={(e)=>{handleChange(e,'Credit/debit')}} />
      <input type="button" value="Add" onClick={(e)=>{handleClick()}}/>
    <table>
    <div class="container text-center">
  <div class="row">
    <div class="col">
      reason
    </div>
    <div class="col">
      amount
    </div>
    <div class="col">
      credit/debit    </div>
  </div>
</div>
{Array && Array.map((val)=>(
       <tr class="row"><td class="col">{val.reason}</td>
      
    <td class="col">{val.amount}</td>
    <td class="col">{val.credit}</td></tr>
    ))} 
</table>
  
    </>
  )
}

export default Expense