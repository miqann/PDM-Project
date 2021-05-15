import React, { Component } from 'react';
import './RegisterPage.css';
import {UserOutlined, LockOutlined } from '@ant-design/icons';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        alert('Successfully Login!');
        event.preventDefault();
      }

    render (){
        return (
            <div class="bodyRegister">
            <div class="main">
            <div class="logo"></div>
            <div class="title">Login Page</div>
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
                <a href="#">Forget your password? Contact us.</a> 
            </div>
            </div>
            </div>
            );
    }
}

export default LoginPage;