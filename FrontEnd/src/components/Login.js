import React, { Component } from 'react';
import './style.css';
import Background from './image/bg2.png';
import {UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        alert('Successfully Login!');
        event.preventDefault();
      }
    render(){
        return(
            <div style={{ backgroundImage: `url(${Background})` }} class="wrapper"> 
                <div class="head">  
                    <header class="navbar-expand  flex-row flex-md-row">              
                        <Link class=" brand" to="./">MDQT BANK</Link>
                            <div class="searching" >
                                <ul class="navbar-nav" >
                                    <li class="nav-item flex-item" >
                                        <Link class="nav-link active" aria-current="page" to="./">Home</Link>
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
                            <h4 class="title1 ">Login</h4>
                            <form onSubmit={this.handleSubmit}>
                                <div class="credentials">
                                    <div class="username">
                                        <UserOutlined />
                                        <input type="text" name="username" placeholder="Username" required="true"></input>
                                    </div>
                                    <div class="password">
                                        <LockOutlined />
                                        <input type="password" name="password" placeholder="Password" required="true"></input>
                                    </div>
                                </div>
                                <button type="submit" class="submit">Login</button>
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

export default Login;