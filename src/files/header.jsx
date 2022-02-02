import React from "react";
import '../App.css';
// import { Link} from 'react-router-dom'
import image from '../image/icons8-search-32.png'
// import image from '../image/dashboard.png'
import notification from '../image/notification.jpg'
import profile from '../image/profile.png'
import { Link, useNavigate } from 'react-router-dom';




export default function Header(props) {
    let name = props.name
    const navi = useNavigate();
    const rouerChange = (e) => {
        e.preventDefault();
        navi('/');
    }

  
  const nav = (e)=>{
     // e.preventDefault()
      navi('/login')
  }

    return <div className="container">
        <div className="header">
            <div className="nav">
               
                    
{/*                        
                          <div className="drop-down">
                           <select name="dhx" id="i">
                               <option value="">Home</option>
                               <option value="" onClick={nav}>Education </option>
                               <option value="">Qalification</option>
                           </select>
                           </div> */}
                           
                           {/* <h1>EDUCATION</h1> */}
                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16" >
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
<h1>EDUCATION</h1>
                           
                       

                   
               
                <div className="search" >

                    <input type="text" placeholder='search..' style={{ borderStyle: 'solid', borderRadius: '9px', borderRight: 'none' }}></input>
                    <button style={{ borderStyle: 'solid', borderRadius: '9px', borderLeft: 'none' }}><img src={image}></img></button>
                </div>
                <div className="user">
                <div style={{color:'white'}}>{name}</div>
                    <a className="btn" onClick={rouerChange}>LOGOUT</a>
                    {/* <div style={{color:'white'}}>{name}</div> */}
                    {/* <a  className="signup">SIGN UP</a> */}
                    <img src={notification}></img>
                    <div className="img-case">
                        <img src={profile}></img>
                        
                    </div>
                    <div>{name}</div>
                </div>
            </div>
        </div>
    </div>
}