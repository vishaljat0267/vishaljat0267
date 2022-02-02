import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {

 const [userName,setUserName] = React.useState('');
 const [pass,setPassword] = React.useState('')
 const navi = useNavigate();
 const handleSubmit = (e) => {
    e.preventDefault();
   
    const userList = localStorage.getItem('userList') || [];
    const userListParsed = typeof userList == 'string' ? JSON.parse(userList) : userList;
    const newUser={
      userName,pass
    }
    
    userListParsed.push(newUser);
 
    localStorage.setItem('userList', JSON.stringify(userListParsed))
    navi('/login');
        
       
    }
   

   




  return(<>
  
  
  <div style={{display:'grid' ,backgroundColor:'pink', height:'100vh'}}>
  <div>
            <h1 style={{marginTop:'10vh',textAlign:'center'}}>SIGN UP</h1>
          </div>
      <form style={{placeSelf:'center',border:'3px solid black',height:'420px',color:'darkblack',backgroundColor:'#C7B198',borderRadius:'5px',width:'450px',padding:'4vh',marginTop:'-60vh'}} >
      
    
          <label htmlFor="fname"> Name   :   </label><br/>
          <input type="text" style={{width:'400px',height:'30px',border:'2px solid',borderRadius:'5px'}}
           value={userName} onChange={(e)=>setUserName(e.target.value)}
          id="fname" name="firstname" placeholder="Your name.."/>
          <br />
          <br />
          <br />
      
          <label htmlFor="pwd">Password</label><br/>
          <input type="password" value={pass} style={{width:'400px',height:'30px',border:'2px solid',borderRadius:'5px'}}
          onChange={(e)=>setPassword(e.target.value)} id="pwd" name="password" placeholder="Password"/>
          <br />
          <br />
          <br />
          <label htmlFor="num">Mobile No.</label><br/>
          <input type="tel" id="mob" style={{width:'400px',height:'30px',border:'2px solid',borderRadius:'5px'}}
          name="number" placeholder="Enter Your Mobile No."/>
          <br />
          <br />
          <br />
          <label htmlFor="country">Country</label><br/>
          <select id="country" name="country" style={{width:'402px',height:'30px',border:'2px solid',borderRadius:'5px'}}>
            <option value="India">India</option>
            <option value="australia">Australia</option>
            <option value="">Canada</option>
            <option value="usa">USA</option>
          </select>
          <br />
          <br />
          <br />
          <label >Allow Notification    :    </label>
          <input type="checkbox" style={{width:'40px',height:'30px',border:' solid',borderRadius:'5px'}}/><br/>
        
          <input type="submit" value="Sign up" onClick={handleSubmit} style={{marginTop:'20px',width:'100px',height:'25px',border:'solid',backgroundColor:'orange'}}/>
         
        </form>
        
   </div>
   </>
  );
}