import React from 'react';
import { Link } from 'react-router-dom'
import welcome from './image/welcome.jpg'
import wall from './image/wall.jpg'
export default function Welcome() {
    const headDesign = {
        backgroundColor: '#072227', display: 'flex',
        justifyContent: 'space-between',
        //justifyContent: 'end',
        gap: '15px',
        height: '80px',
        fontSize: '30px',



        // boder:'solid 2px',

        padding: '10px 10px 5px 0'
    }
    return (<>
     
    
        <div style={headDesign}>
            <div>
                <h1  >EDUCATION</h1></div>
            <div><Link to='/signup' style={{ color: 'white', }}>
                Signup
            </Link >
                <br />
                </div>
                <div>
                <Link to='/login' style={{ color: 'white', }}>
                    Signin
                </Link>
            </div>


            {/* <img src={welcome}></img> */}
        </div>
        <div >
            <img src={wall} style={{ height: '100vh', width: '100%' }} ></img>
        </div>
       
    </>

    );
}