import React, { Component } from 'react';
import './style.css';
import {BrowserRouter, Route ,Link } from 'react-router-dom';
import Search from './search1.png';
import Background from './bg3.png';
import {UserOutlined, PhoneOutlined, MailOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons';


class Homepage extends Component {
    render() {
        return (

            // Container 
            <div style={{ backgroundImage: `url(${Background})` }} class="wrapper"> 
                {/* Header */}
                <div class="head">                
                    <header class="navbar navbar-expand navbar-light  flex-md-row">
                        <a class="navbar-brand font-weight-bold" href="./HomePage.js">MDQT Bank</a>
                        <div class="navbar-nav-scroll" >
                            <ul class="navbar-nav bd-navbar-nav flex-row" >
                                <li class="nav-item flex-item" >
                                    <a class="nav-link active" aria-current="page" href="./HomePage.js">Home</a>
                                </li>
                                <li class="nav-item flex-item">
                                    <Link class="nav-link" to="./Login">Login</Link>
                                </li>
                                <li class="nav-item flex-item">
                                    <Link class="nav-link" to="./Register">Signin</Link>
                                </li>
                            
                            </ul>

                            {/*Dark Mode Button*/}
                            <div class="distance-btn pos">
                                <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                                    <li class="nav-item flex-fill flex-item">
                                        <div class="pos custom-control custom-switch mr-5">
                                            <input type="checkbox" class="custom-control-input" id="selector"/>
                                                <label class="custom-control-label" for="selector"></label>
                                                <a>Dark Mode</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>          
                    </header>

                </div>

                
                                        {/* <li class="nav-item ">
                                            <form class="d-flex">
                                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                                <button class="btn " type="button">
                                                    <img class="btn-size" src={Search}>
                                                    </img>
                                                </button>
                                            </form>
                                        </li> */}
   
            </div>
    );
    }
}

export default Homepage;