import React, { Component } from 'react';
import './style.css';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import Background from './image/bg3.png';
import {UserOutlined, LockOutlined } from '@ant-design/icons';


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
                <div class="bodyRegister">
                    <div class="main">
                        <div class="logo"></div>
                        <div class="title1">Login</div>
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
        );
    }
}

export default Login;