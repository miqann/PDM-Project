import React, { Component } from 'react';
import './style.css';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import Background from './image/bg2.png';
import {UserOutlined, PhoneOutlined, MailOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';


class Register extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); // bind this function
        this.handleChangeUsername = this.handleChangeUsername.bind(this); //bind this function
        this.handleChangePassword= this.handleChangePassword.bind(this);// bind this function
        this.handleChangeFullname= this.handleChangeFullname.bind(this);// bind this function
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this); //bind this function
        this.handleChangeEmail= this.handleChangeEmail.bind(this);// bind this function
        this.handleChangeCity= this.handleChangeCity.bind(this);// bind this function
        this.state = {
            fullName:'',
            userName: '',
            password: '',
            phoneNumber:'',
            email:'',
            city: '',
            message:'',
            AccountId:0,
        };
    }
    
    //set data of username when typing
    handleChangeUsername(event) {
        this.setState({userName: event.target.value}); 
        
    }

    //set data of password when typing
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    //set fullname from response
    handleChangeFullname(event) {
        this.setState({fullName: event.target.value});
        
    }
    //set data of phonenumber when typing
    handleChangePhoneNumber(event) {
        this.setState({phoneNumber: event.target.value}); 
        if (this.state.phoneNumber.length > 9){
            this.setState({message: 'error phone'});
        }else{
            this.setState({message: ''})
        }
    }

    //set data of email when typing
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

//set data of city when typing
    handleChangeCity(event) {
        this.setState({city: event.target.value});
    }

    handleSubmit(event) {
        let path='http://localhost:1080/register/'; // declare url to server
        let {userName, password, phoneNumber, fullName,email, city} = this.state; // declare variable using es6
        axios.post(path,{userName, password, phoneNumber, fullName,email, city}) // post data to server
        .then(res => {
            let {message, accountId} = res.data;
            console.log(res.data);
            if (accountId != undefined) {
                alert(`${message}! Your account number: ${accountId}`)
            }else {
                this.setState({message: message});
            }
        })
        .then(() => {
            if(this.state.message == '') {
                this.props.history.push({
                    pathname: '/login',
                    
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
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
                            <div class = {this.state.message != '' && this.state.message != 'true' ? 'text-center alert alert-danger': 'hidden' }>{this.state.message}</div>
                            <form onSubmit={this.handleSubmit}>
                            <div class="credentials">
                                <div class="username">
                                    <UserOutlined />
                                        <input type="text" name="fullname" placeholder="Fullname" required="true"
                                        value = {this.state.fullName}
                                        onChange = {this.handleChangeFullname}></input>
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
                                        value = {this.state.phoneNumber}
                                        onChange = {this.handleChangePhoneNumber}></input>
                                    </div>
                                    <div class="email">
                                    <MailOutlined />
                                        <input type="text" name="email" placeholder="Email address" required="true"
                                        value = {this.state.email}
                                        onChange = {this.handleChangeEmail}></input>
                                    </div>
                                    <div class="city">
                                    <HomeOutlined />
                                        <input type="text" name="city" placeholder="Your city" required="true"
                                        value = {this.state.city}
                                        onChange = {this.handleChangeCity}></input>
                                    </div>
                                    <div class="password">
                                    <LockOutlined />
                                        <input type="password" name="password" placeholder="Password" required="true"
                                        value = {this.state.password}
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