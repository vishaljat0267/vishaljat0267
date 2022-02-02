import React from "react";
import Badcrumble from "./files/badcrumble";
import education from './image/education1.jpg'
export default function Setting(){

    return(<>
     <div style={{backgroundColor:'#54BAB9',padding:'0.5vh'}}>
     <Badcrumble expressPath={['Dashboard/','Setting']}/>

     <h1  style={{border:'solid black',padding:'1vh'}}>Setting</h1>
     <div >
            <img src={education} style={{ height: '85vh', width: '100%' }} ></img>
        </div>

     </div>
    
    </>);
    


}