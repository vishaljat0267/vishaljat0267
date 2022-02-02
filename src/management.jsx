import React from "react";
import Badcrumble from "./files/badcrumble";
import education from './image/education.jpg'

export default function Management(){

    return(<>
    <div style={{backgroundColor:'#54BAB9',padding:'0.5vh'}}>
    <Badcrumble expressPath={['Dashboard/','Management']}/>
    <h1 style={{border:'solid black',padding:'1vh'}}>Management</h1>
    <div >
            <img src={education} style={{ height: '85vh', width: '100%' }} ></img>
        </div>
   
   

    </div>
   
    </>);
    


}