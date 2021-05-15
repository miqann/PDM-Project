import React, { Component } from 'react';
import './style.css';
import {BrowserRouter, Route ,Link } from 'react-router-dom';
import Search from './image/search1.png';
import Background from './image/bg2.png';
import {UserOutlined, LockOutlined } from '@ant-design/icons';

class Transfer extends Component{
    render(){
        return(
            // Container 
            <div style={{ backgroundImage: `url(${Background})` }} class="wrapper"> 
                {/* Header */}
                <div class="head">                
                    <header class="navbar-expand  flex-row flex-md-row">
                        <Link class=" brand" to="./">MDQT BANK</Link>
                        <div class="distance-s" >
                            <ul class="navbar-nav" >
                                <li class="nav-item flex-item" >
                                    <a class="nav-link active" aria-current="page" href="./">Home</a>
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

                    <div class="bodyRegister">
                        <div class="main">
                            <div class="logo"></div>
                            {/* <h4 class="title1 ">Payment</h4> */}
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <input type="id" name="idcard" placeholder="ID Card"></input>

                                </div>
                                <button type="submit" class="submit">Continue</button>
                            </form>
                            <div class="link">
                                <Link class="distance" to="./">Back</Link>
                                <Link to="#">Forget your password? Contact us.</Link> 
                            </div>
                        </div>
                    </div>                
                </div>
   
            </div>
        );
    }
}
export default Transfer;