import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import axios from 'axios';

export default function LoginPage() {

  const [userName, setUserName] = React.useState();
  const [pwd, setPwd] = React.useState();

  const navi = useNavigate();
  const onSubmitLogin = (e) => {
    e.preventDefault();
    

    let userList = localStorage.getItem("userList")
    let verifyUser = JSON.parse(userList);
   


    // if(userName === 'A') {

    // }

    // else{
    //    alert('Invalid User')
    // }
    //     var flag = 0;
    console.log(userList);
    console.log(verifyUser);
    for (var i = 0; i<verifyUser.length; i++) {
      if (verifyUser[i].userName===userName && verifyUser[i].pass === pwd) {
        navi('/dashboard',{state:verifyUser[i].userName});
        
        
        return
      
      }
      //alert('invalid user')
      
      // alert('invalid user')

    }
    alert('invalid user')

    

  }
  let count=0
  const [value, setValue] = useState([]);
  const handleTextChange = () => {
    setValue('working'+count);
    count++;
  }

  useEffect(() => {
   
  // //   fetch('https://jsonplaceholder.typicode.com/users')
  // // .then(res => res.json())
  // // .then(res => res.map(user => user.username))
  // // .then(userNames => console.log(userNames));
  axios.get( 'https://fakestoreapi.com/products')
            .then( response => {
              setValue(response.data)
              console.log(response.data)
            } )
            .catch( error => {
                 console.log("error",error)
            } );

  

    
  }, []);
  return ( 
    <div style={{display:'grid',backgroundColor:'#DFD3C3', height:'100%'}}>
      {/* <button onClick={handleTextChange} className="w-25 btn btn-primary">Change Text</button> */}
      <div>
            <h1 style={{marginTop:'50vh',textAlign:'center'}}>LOGIN</h1>
          </div>
      <form style={{placeSelf:'center',padding:'10vh',width:'500px',height:'300px',border:'1px solid blue',borderRadius:'10px',backgroundColor:'#A68DAD',marginTop:'5vh'}} onSubmit={onSubmitLogin}>
          <div>
            <label htmlFor="name">Name:</label><br />

            <input  id="name"  value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder='Enter Name...' 
            style={{width:'400px',height:'30px',borderRadius:'5px'}}/>
          </div>
          <br />
        <div>
          <label htmlFor="password">Password:</label> <br />
            <input id="password" type='password' value={pwd} onChange={(e)=>setPwd(e.target.value)} placeholder='Enter Password...' 
            style={{width:'400px',height:'30px',borderRadius:'5px'}}/>
        </div>
        <div>
       
        <input type='submit' className='btn btn-danger' value='Login' style={{marginTop:'20px',width:'100px',height:'25px'}} />
        </div>
      </form>
      <center>
      {value.map((v)=> <div className='rounded w-50 bg-white mt-2 p-4'
      style={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
        <b>{v.id}</b>
        <p>{v.title}</p>
         {/* <p>{v.body}</p> */}
        </div>) }
        </center>
        


      
      
      
    </div> )
}