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
    constructor(props) {
        super(props);
        this.handleWallet = this.handleWallet.bind(this);
        this.handleTransfer = this.handleTransfer.bind(this);
        this.state = {
            //get data from login
            AccountId : this.props.location.state.AccountId,
            currentBalance: this.props.location.state.currentBalance,
            Wallet: 'wallet-cover',
            Transfer: 'transfer-cover hidden'

            
        }
        
    }

    handleWallet(event) {
        this.setState({Wallet: 'wallet-cover',
        Transfer: 'transfer-cover hidden'});
    }
    
    handleTransfer(event) {
        this.setState({Wallet: 'wallet-cover hidden',
        Transfer: 'transfer-cover'});
    }

    render(){
        return(
            <div style={{ backgroundImage: `url(${Background})` }} class="wrapper "> 
                {/* Header */}
                <div class="head">                
                    
                        <Link class=" brand" to="./">MDQT BANK</Link>
                        
                            
                    <div class="wrapper-2">
                        
                        <div class="sidebar">
                            <div>
                                <ul class="bar-head">
                                    <li class="font">{this.state.AccountId}</li>
                                    <img class="account-icon" src={Account}></img>

                                </ul>
                                <ul class="bar-element" onClick ={this.handleWallet}>
                                    <li class="nav-item sidebar-elem ">My Wallet</li>
                                    <img class="icon" src={Wallet}></img>
                                </ul>

                                <ul class="bar-element" onClick={this.handleTransfer}>
                                    <li class="nav-item sidebar-elem">Transfer</li>
                                    <img class="icon" src={Transfer}></img>

                                </ul>
                                <ul class="bar-element bar-stock">
                                    <li class="nav-item sidebar-elem">Stock Exchange</li>
                                    <img class="icon icon-stock" src={Money}></img>
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

                           
                            < div class ="container-small">
                                <div class={this.state.Wallet}>
                                    <div class="text-big">Available Balances:
                                        <span class="distance">{this.state.currentBalance} VND</span>
                                    </div>
                                    <div class="text-big">Credit limit:
                                        <span class="distance">10.000.000 VND</span>
                                    </div>
                                    <div class="text-big">Class:
                                        <span class="distance">Bronze</span>
                                    </div>
                                </div>
                                <div class={this.state.Transfer}>
                                    <ul class ="text-big">Transferer Information
                                        <li class="text-small">Account ID:</li>
                                        <input class="distance" type="text"></input>
                                        <span class="text-small">Available Balances:</span>
                                        <span class="text-small">123.456 VND</span>
                                    </ul>
                                    
                                    <ul class ="text-big">Receiver Information
                                        <li class="text-small">Account ID:</li>
                                        <input class="distance" type="text"></input>
                                        <li class="text-small">Beneficiary Bank:</li>
                                        <input class="distance" type="text"></input>
                                    </ul>
        
                                    <ul class ="text-big">Transaction Information
                                        <li class="text-small">Amount:</li>
                                        <input class="distance" type="text"></input>
                                        <li class="text-small">Transaction fee:</li>
                                        <input class="distance" type="text"></input>
                                        <li class="text-small">Note:</li>
                                        <input class="distance" type="text"></input>
                                    </ul>

                                    <div class=" distance justify-content-md-end">
                                        <button class="btn btn-primary " type="submit" value="Continue">Continue</button>
                                    </div>
                                </div>
                                
                                
                            </div> 
                        

                        </div>

                    
                        
                </div>
            </div>    

        );
    }
}

export default UserInterface;