import React from 'react';
import {Link} from 'react-router-dom'

function Header(props){
    return(
        <>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                     </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">             
                            <li><Link to="/bag" data-test="42">Bag</Link></li>
                            <li><Link to="/shoe">Shoe</Link></li>
                            <li><Link to="/glass">Glass</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr/>
            <h1>Items Listed</h1>
        </>
    )
}

export default Header