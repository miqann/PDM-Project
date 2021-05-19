import React, { Component } from 'react';
import './style.css';
import Background from './image/bg2.png';
import {UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); // bind this function
        this.handleChangeUsername = this.handleChangeUsername.bind(this); //bind this function
        this.handleChangePassword= this.handleChangePassword.bind(this);// bind this function
        this.handleChangeAccount= this.handleChangeAccount.bind(this);// bind this function
        this.state = {
            userName: '',
            password: '',
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

    //set accountId from response
    handleChangeAccount(account) {
        this.setState({AccountId: account});
    }

    handleSubmit(event) {
        let path='http://localhost:1080/login/'; // declare url to server
        let {userName, password} = this.state; // declare variable using es6
        console.log(`${userName}: ${password}`);// log data
        axios.post(path,{userName,password}) // post data to server
            .then((res) => {
                console.log(res.data);
                let {message,accountId} = res.data; //declare variable by data response from server
                console.log(`account: ${accountId}`);
                if (message == 'true'){
                    // this.handleChangeAccount(accountId);
                    this.setState({AccountId: accountId}); //set accountid
                    console.log(this.state.AccountId); // check for account id
                    alert('Login Successfully!')
                } else {
                    this.setState({
                        message: message,
                        userName: '',
                        password: ''});
                }
            })

             //redirect to next page and passing state if login true
            .then(() => {
                if(this.state.AccountId != 0) {
                    this.props.history.push({
                        pathname: '/userinterface',
                        state:
                        {
                            AccountId: this.state.AccountId,
                        }
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            });

        //not reload page after submit form
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
                            <div class = {this.state.message != '' && this.state.message != 'true' ? 'text-center alert alert-danger': 'hidden' }>{this.state.message}</div>
                            <form onSubmit={this.handleSubmit}>
                                <div class="credentials">
                                    <div class="username">
                                        <UserOutlined />
                                        <input type="text" name="username" placeholder="Username" required="true"
                                        value = {this.state.userName}
                                        onChange = {this.handleChangeUsername}></input>
                                    </div>
                                    <div class="password">
                                        <LockOutlined />
                                        <input type="password" name="password" placeholder="Password" required="true"
                                        value = {this.state.password}
                                        onChange = {this.handleChangePassword}></input>
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