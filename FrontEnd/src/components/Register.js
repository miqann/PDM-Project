import React, { Component } from 'react';
import './style.css';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import Background from './image/bg2.png';
import {UserOutlined, PhoneOutlined, MailOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons';


class Register extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); // bind this function
        // this.handleChangeUsername = this.handleChangeUsername.bind(this); //bind this function
        // this.handleChangePassword= this.handleChangePassword.bind(this);// bind this function
        // this.handleChangeAccount= this.handleChangeAccount.bind(this);// bind this function
        this.state = {
            userName: '',
            password: '',
            message:'',
            AccountId:0,
        };
    }
    
    handleSubmit(event) {
        alert('Successfully Register!');
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
                                        <Link class="nav-link" to="./Login">Log In</Link>
                                    </li>
                                </ul>
                            </div>
                    </header>

                    <div class="bodyRegister">
                        <div class="main">
                            <div class="logo"></div>
                            <div class="title">Register</div>
                            <form onSubmit={this.handleSubmit}>
                            <div class="credentials">
                                <div class="username">
                                    <UserOutlined />
                                        <input type="text" name="username" placeholder="Username" required="true"
                                        value = {this.state.userName}
                                        onChange = {this.handleChangeUsername}></input>
                                    </div>
                                    <div class="username">
                                    <UserOutlined />
                                        <input type="text" name="username" placeholder="Username" required="true"
                                        value = {this.state.userName}
                                        onChange = {this.handleChangeUsername}></input>
                                    </div>
                                    <div class="phone">
                                    <PhoneOutlined />
                                        <input type="text" name="phone" placeholder="Phone number" required="true"
                                        value = {this.state.userName}
                                        onChange = {this.handleChangePhoneNumber}></input>
                                    </div>
                                    <div class="email">
                                    <MailOutlined />
                                        <input type="text" name="email" placeholder="Email address" required="true"
                                        value = {this.state.userName}
                                        onChange = {this.handleChangeEmail}></input>
                                    </div>
                                    <div class="city">
                                    <HomeOutlined />
                                        <input type="text" name="city" placeholder="Your city" required="true"
                                        value = {this.state.userName}
                                        onChange = {this.handleChangeCity}></input>
                                    </div>
                                    <div class="password">
                                    <LockOutlined />
                                        <input type="password" name="password" placeholder="Password" required="true"
                                        value = {this.state.userName}
                                        onChange = {this.handleChangePassword}></input>
                                    </div>
                                </div>
                                <button type="submit" class="submit">Register</button>
                            </form>
                            <div class="link">
                                <Link class="distance" to="./">Back</Link>
                                <Link to="#">Need help? Contact us.</Link> 
                        
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        );
        }
}

export default Register;