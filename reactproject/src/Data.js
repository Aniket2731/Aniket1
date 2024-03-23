import React from 'react'
import axios from 'axios'

function Data() {
    const[Data,setData]=React.useState({})
    const[Info,setInfo]=React.useState()
    const handleClick=()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            console.log(res)
            setInfo(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const handlePostClick=()=>{
        axios.post('https://fakestoreapi.com/products',Data)
        .then((res)=>{
            console.log('Post',res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const handleUpdate=()=>{
        axios.put('https://fakestoreapi.com/products/7',Data)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const handleDelete=()=>{
        axios.delete('https://fakestoreapi.com/products/10',Data)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    const handleChange=(e,type)=>{
        if(type=='title'){
            setData({...Data,title:e.target.value})
        }
        else if(type=='price'){
            setData({...Data,price:e.target.value})
        }
        else if(type=='description'){
            setData({...Data,description:e.target.value})
        }
        else if(type=='image'){
            setData({...Data,image:e.target.value})
        }
        else if(type=='category'){
            setData({...Data,category:e.target.value})
        }
    }
  return (
    <div>
        <table>
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
            </tr>
            {
               Info && Info.map((val)=>(
                    <tr>
                        <td>{val.title}</td>
                        <td>{val.price}</td>
                        <td>{val.category}</td>
                    </tr>
                )
                )
            }
        </table>
        <label>Title:</label>
        <input type="text" onChange={(e) =>{handleChange(e,'title')}}/>
        <label>Price:</label>
        <input type="text" onChange={(e) =>{handleChange(e,'price')}}/>
        <label>Description:</label>
        <input type="text" onChange={(e) =>{handleChange(e,'description')}}/>
        <label>Image:</label>
        <input type="text" onChange={(e) =>{handleChange(e,'image')}}/>
        <label>Category:</label>
        <input type="text" onChange={(e) =>{handleChange(e,'category')}}/>

      <button onClick={()=>{handleClick()}}>
        Get Data
      </button>
      <button onClick={()=>{console.log(Data)}}>
        submit
      </button>
      <button onClick={()=>{handlePostClick()}}>
        Post Data
      </button>
      <button onClick={()=>{handleUpdate()}}>
        Update Data
      </button>
      <button onClick={()=>{handleDelete()}}>
        Delete
      </button>
      </div>
  )
}

export default Data