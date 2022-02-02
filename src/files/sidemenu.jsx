import React from "react";
import '../App.css';
import { Link} from 'react-router-dom'


export default function Sidemenu(){



return<div className="side-menu">
   
{/* <div className="brand-name">blueBox</div> */}
<div  style={{border:'solid #171717',borderBottom:'none',fontSize:'30px',padding:'1vh 3vw 1vh 5.2vw'}}>
<Link to ='management'  >Management</Link><br/>
</div>
<div style={{marginTop:'2vh'}}>
<Link to ='settings' style={{border:'solid #444444',fontSize:'30px',padding:'1vh 3vw 1vh 9.5vw'}}>Settings</Link>


</div>
<div style={{marginTop:'3vh'}}>
{/* <Link to ='support'  >support</Link><br/> */}
<Link to ='support' style={{border:'solid #444444',fontSize:'30px',padding:'1vh 3.5vw 1vh 9.5vw'}}>support</Link>
</div>
 
</div>
}