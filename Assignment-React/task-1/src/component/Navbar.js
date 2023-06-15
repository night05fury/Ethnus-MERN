import React from 'react';

import {Link} from "react-router-dom";

export default function Navbar(props){
return(
    <>
        <nav id="NavigationBar"className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
                </button>
                
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className=''>
                    <li className='nav-item'>
                        <Link className='nav-link active' aria-current='page' to='/'>Home</Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link className='nav-link' to='/about'>About</Link>
                    </li> */}
                    </ul>
                </div>
                </div>
   </nav>
    </>
)
}
