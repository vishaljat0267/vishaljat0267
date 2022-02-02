
import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Sidemenu from './files/sidemenu';
import Header from './files/header';
import { Outlet, useLocation } from 'react-router-dom';



export default function Dashboard() {
    const location = useLocation();
    const [name, setName] = useState([]);
    useEffect(()=>{
        let name = location.state;
        setName(name)
    console.log(name);
    },[]);

    return (<>
       
       <div style={{display:'flex' }}>
        <div>
            <Sidemenu />
            <Header name={name} />
        </div>
        <div style={{width:'80vw',height:'93vh',paddingTop:'10px',position:'absolute',left:'20vw',top:'6.2vh'}} >
            
            <Outlet/>
        </div></div>
        </>
       



    );
}
