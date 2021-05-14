import React, { Component } from 'react';
import './style.css';
import Search from './search1.png';
import Background from './bg3.png';
import {UserOutlined, PhoneOutlined, MailOutlined, HomeOutlined, LockOutlined } from '@ant-design/icons';


class Main extends Component {
    render() {
        return (

            // Container 
            <div style={{ backgroundImage: `url(${Background})` }} class="wrapper"> 
                {/* Header */}
                {/* <div class="head">                
                    <header class="navbar navbar-expand navbar-light  flex-md-row">
                        <a class="navbar-brand font-weight-bold" href="#">MDQT Bank</a>
                        <div class="navbar-nav-scroll" >
                            <ul class="navbar-nav bd-navbar-nav flex-row" >
                                <li class="nav-item flex-item" >
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item flex-item">
                                    <a class="nav-link" href="#">Login</a>
                                </li>
                                <li class="nav-item flex-item">
                                    <a class="nav-link" href="#">Signin</a>
                                </li>
                            
                            </ul> */}

                            {/*Dark Mode Button*/}
                            {/* <div class="distance-btn pos">
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

                </div> */}

                
                                        {/* <li class="nav-item ">
                                            <form class="d-flex">
                                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                                <button class="btn " type="button">
                                                    <img class="btn-size" src={Search}>
                                                    </img>
                                                </button>
                                            </form>
                                        </li> */}

                {/* Register */}
                
                {/* <div class="bodyRegister">
                        <div class="main">
                            <div class="logo"></div>
                            <div class="title">Register Page</div>
                            <form onSubmit={this.handleSubmit}>
                                <div class="credentials">
                                    <div class="username">
                                    <UserOutlined />
                                        <input type="text" name="username" placeholder="Username" required="true"></input>
                                    </div>
                                    <div class="phone">
                                    <PhoneOutlined />
                                        <input type="text" name="phone" placeholder="Phone number" required="true"></input>
                                    </div>
                                    <div class="email">
                                    <MailOutlined />
                                        <input type="text" name="email" placeholder="Email address" required="true"></input>
                                    </div>
                                    <div class="city">
                                    <HomeOutlined />
                                        <input type="text" name="city" placeholder="Your city" required="true"></input>
                                    </div>
                                    <div class="password">
                                    <LockOutlined />
                                        <input type="password" name="password" placeholder="Password" required="true"></input>
                                    </div>
                                </div>
                                <button type="submit" class="submit">Register</button>
                            </form>
                            <div class="link">
                                <a class="distance" href="#">Back</a>
                                <a href="#">Need help? Contact us.</a> 
                        
                            </div>
                        </div>
                </div> */}
                
                {/* Login */}
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
                            <a class="distance" href="#">Back</a>
                            <a href="#">Forget your password? Contact us.</a> 
                        </div>
                    </div>
                </div>



                
            </div>
    );
    }
}

export default Main;