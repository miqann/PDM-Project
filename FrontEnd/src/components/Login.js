import React, { Component } from 'react';
import './style.css';
import Search from './search1.png';
import Background from './bg3.png';
import {UserOutlined, PhoneOutlined, MailOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons';

class Login extends Component{
    render(){
        return(
            <div style={{ backgroundImage: `url(${Background})` }} class="wrapper"> 
                <div class="bodyRegister">
                    <div class="main">
                        <div class="logo"></div>
                        <div class="title1">Login Page</div>
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
                            <a class="distance" href="./HomePage.js">Back</a>
                            <a href="#">Forget your password? Contact us.</a> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;