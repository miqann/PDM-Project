import React, { Component } from 'react';
import './style.css';
import {Link } from 'react-router-dom';
import Background from './image/bg2.png';



class HomePage extends Component {
    render() {
        return (

            // Container 
            <div style={{ backgroundImage: `url(${Background})` }} class="wrapper"> 
                {/* Header */}
                <div class="head">                
                    <header class="navbar-expand  flex-row flex-md-row">
                        <Link class=" brand" to="./">MDQT BANK</Link>
                        <div class="distance-s" >
                            <ul class="navbar-nav" >
                                <li class="nav-item flex-item" >
                                    <Link class="nav-link active" aria-current="page" to="./">Home</Link>
                                </li>
                                <li class="nav-item flex-item">
                                    <Link class="nav-link" to="./Login">Log In</Link>
                                </li>
                                <li class="nav-item flex-item">
                                    <Link class="nav-link" to="./Register">Sign In</Link>
                                </li>
                            </ul> 
                        </div>          
                    </header>                
                </div>
   
            </div>
    );
    }
}

export default HomePage;