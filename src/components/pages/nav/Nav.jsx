import React from 'react';
import './nav.css'
import '../../../App.css'
import logo from '../../../img/logo.png'


function Nav(props) {
    return (
        <div className="container">
            <div className="nav-block">
                <img className='logo' src={logo} alt=""/>
                <div className="">
                    <ul className="nav-items">
                        <li>
                            <a href="#">
                                Tomb raider
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Research
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Finds
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Plot
                            </a>
                        </li>
                    </ul>
                </div>
                <button>Log in!!</button>
            </div>
        </div>
    );
}

export default Nav;