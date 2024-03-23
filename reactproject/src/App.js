import React from 'react';
import logo from './logo.svg';
import Form from './form';
import Props from './props'
import Login from './Login'
import Danny from './danny'
import Registrationform from './Registrationform';
import Test from './Test';
import Localstore from './Localstore';
import './App.css'
import Data from './Data';
import Expense from './Expense';



function App(props){
  let course='React'
  const[isLogin,setIsLogin] =React.useState(true)
  const checkLogin=()=>{
    setIsLogin(!isLogin)
    
  }
  return (
    <div>
      {isLogin? <Login checkLogin={checkLogin}/> : <Registrationform  onform checkLogin={checkLogin}/>}
      {/* <Test name='Aniket' course={course} /> */}
      {/* <Localstore/> */}
      {/* <Data/> */}
      {/* <Expense/> */}
    </div>
  );  
}   
export default App;