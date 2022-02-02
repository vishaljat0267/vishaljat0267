import React from "react";
import { Link, useNavigate } from 'react-router-dom';


export default function Badcrumble(props){
    const navi = useNavigate();
    const routeChange1 = (e) => { 
        e.preventDefault();
        navi('/login');
    }


    const path = props.expressPath || [];
    return <ul style={{display:'flex',gap:'10px',padding:'2vh'}}>
        <li><a onClick={routeChange1}>{ path[0] }</a></li>
        <li>{ path[1] }</li>
        <li>{ path[2] }</li>
        <li>{ path[3] }</li>
    </ul>
}