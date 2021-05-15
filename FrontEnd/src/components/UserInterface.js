import React, { Component } from 'react';
import './style.css';
import {BrowserRouter, Route ,Link } from 'react-router-dom';
import Account from './image/accountblue.png';
import Background from './image/bg2.png';
import SocialMedia from './image/media.png';
import Wallet from './image/wallet.png';
import Transfer from './image/transfer.png';
import Money from './image/money.png';


class UserInterface extends Component{
    render(){
        return(
            <div style={{ backgroundImage: `url(${Background})` }} class="wrapper "> 
                {/* Header */}
                <div class="head">                
                    
                        <Link class=" brand" to="./">MDQT BANK</Link>
                        
                            
                    
                    <div class="sidebar">
                        <ul class="bar-head">
                            <li class="font">Account</li>
                            <img class="account-icon" src={Account}></img>
            
                        </ul>
                        <ul class="bar-element">
                            <li class="nav-item sidebar-elem ">My Wallet</li>
                            <img class="icon" src={Wallet}></img>
                        </ul>
                        <ul class="bar-element">
                            <li class="nav-item sidebar-elem">Transfer</li>
                            <img class="icon" src={Transfer}></img>
                        </ul>
                        <ul class="bar-element">
                            <li class="nav-item sidebar-elem">Stock Exchange</li>
                            <img class="icon" src={Money}></img>
                        </ul>
                        <ul class="bar-long-element" >
                            <li class="nav-item"></li>
                        </ul>
                        <ul >
                            <li class="nav-item elem">Contact Us</li>
                            <img class="sc-icon" src={SocialMedia}></img>
                        </ul>
                    </div>
                </div>
            </div>    

        );
    }
}

export default UserInterface;