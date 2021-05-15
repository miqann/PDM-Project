import React, { Component } from 'react';
import './style.css';
import {BrowserRouter, Route ,Link } from 'react-router-dom';
import Search from './image/search1.png';
import Background from './image/bg3.png';

class Transfer extends Component{
    render(){
        return(
            <div style={{ backgroundImage: `url(${Background})` }} class="wrapper">
                <div class="head">                
                    <header class="navbar navbar-expand navbar-light  flex-md-row">
                        <a class="navbar-brand font-weight-bold" href="./">MDQT Bank</a>
                        <div class="navbar-nav-scroll" >
                            <ul class="navbar-nav bd-navbar-nav flex-row" >
                                <li class="nav-item flex-item" >
                                    <a class="nav-link active" aria-current="page" href="./">Home</a>
                                </li>
                                <li class="nav-item flex-item">
                                    <Link class="nav-link" to="./Login">Login</Link>
                                </li>
                                <li class="nav-item flex-item">
                                    <Link class="nav-link" to="./Register">Signin</Link>
                                </li>
                            
                            </ul>
                        </div>    
                    </header>        
                </div>
            </div>
        );
    }
}