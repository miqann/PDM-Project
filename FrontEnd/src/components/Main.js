import React, { Component } from 'react';
import LoginPage from './LoginPage';
import './style.css';
import Search from './search1.png';
import Background from './bg3.png';


function validate(){
    console.log(LoginPage);
}
class Main extends Component {
    render() {
        return (

            // Container 
            <div style={{ backgroundImage: `url(${Background})` }} class="wrapper"> 

                {/* Header */}
                <header class="navbar navbar-expand navbar-light flex-column flex-md-row bd-navbar">
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

                                        {/* <li class="nav-item ">
                                            <form class="d-flex">
                                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                                <button class="btn " type="button">
                                                    <img class="btn-size" src={Search}>
                                                    </img>
                                                </button>
                                            </form>
                                        </li> */}
                                    </ul>
                        </div>
    
                    </div>
                            
                </header>

                {/* Login */}
                <div></div>
                
                
            </div>
    );
    }
}

export default Main;