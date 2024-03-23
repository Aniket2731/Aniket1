import React from "react";
function Registartionform(props){
       const[data,setdata]=React.useState({})
    const dothis=(e,type)=>{
        if (type=='first'){
        setdata({...data,first:e.target.value})
    }
    else if (type=='last') {setdata({...data,last:e.target.value})}
    else if (type=='email') {setdata({...data,email:e.target.value})}
    else if (type=='dob') {setdata({...data,dob:e.target.value})}
    else if (type=='password') {setdata({...data,password:e.target.value})}
    else if (type=='repassword') {setdata({...data,repassword:e.target.value})}
    else if (type=='mobile') {setdata({...data,mobile:e.target.value})}
    else {setdata({...data,gender:e.target.value})}}
    return(
        <div>
        <div class="main"/> 
            <label for="first">First Name:</label> 
            <input onChange={(e)=>{dothis(e,'first')}} type="text" id="first" 
                   name="first" 
                   placeholder="Enter your first name" required/> 
  
            <label for="last">Last Name:</label> 
            <input onChange={(e)=>{dothis(e,'last')}} type="text" id="last" 
                   name="last" 
                   placeholder="Enter your last name" required/> 
                   <br></br>
  
            <label for="email">Email:</label> 
            <input onChange={(e)=>{dothis(e,'email')}} type="email" id="email" 
                   name="email" 
                   placeholder="Enter your email" required/> 

<br></br>
  
            <label for="dob">Date of Birth:</label> 
            <input onChange={(e)=>{dothis(e,'dob')}} type="date" 
                   id="dob" name="dob" 
                   placeholder="Enter your DOB" required/> 
                   <br></br>
  
            <label for="password">Password:</label> 
            <input onChange={(e)=>{dothis(e,'password')}} type="password" id="password" 
                   name="password"
                   placeholder="Enter your password"
                   pattern= 
                   "^(?=.\d)(?=.[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$" required                    
                   title="Password must contain at least one number,  
                       one alphabet, one symbol, and be at  
                       least 8 characters long"/> 
                       <br></br>
  
            <label for="repassword">Re-type Password:</label> 
            <input onChange={(e)=>{dothis(e,'repassword')}} type="password" id="repassword" 
                   name="repassword" 
                   placeholder="Re-Enter your password" required/> 
            <span id="pass"></span> 
            <br></br>
  
            <label for="mobile">Contact:</label> 
            <input onChange={(e)=>{dothis(e,'mobile')}} type="text" id="mobile" 
                   name="mobile" 
                   placeholder="Enter your Mobile Number" required 
                   maxlength="10"/> 
  <br></br>
            <label for="gender">Gender:</label> 
            <select id="gender" name="gender" required> 
                <option value="male">Male</option> 
                <option value="female">Female</option> 
                <option value="other">Other</option> 
            </select> 
  
            <div class="wrap"> 
                <button onClick={()=>{console.log(data)}} type="submit" onclick="solve()"> 
                  Submit 
                  </button>
                  <br></br> 
                  <button onClick={()=>{props.checkLogin()}}>Login</button>
            </div> 
    </div> 
    
    )
}
    
export default Registartionform