import React, { Component } from 'react';
import './style.css';
import {BrowserRouter, Route ,Link } from 'react-router-dom';
import Account from './image/accountblue.png';
import Background from './image/bg2.png';
import SocialMedia from './image/media.png';
import Wallet from './image/wallet.png';
import Transfer from './image/transfer.png';
import Money from './image/money.png';
import axios from 'axios';


class UserInterface extends Component{
    constructor(props) {
        super(props);
        let {state} = this.props.location;
        this.handleWallet = this.handleWallet.bind(this);
        this.handleTransfer = this.handleTransfer.bind(this);
        this.handleChangeBankMDQT= this.handleChangeBankMDQT.bind(this);
        this.handleChangeBankVCB= this.handleChangeBankVCB.bind(this);
        this.handleChangeBankTCB= this.handleChangeBankTCB.bind(this);
        this.handleChangeBankBIDV= this.handleChangeBankBIDV.bind(this);
        this.handleChangeBankMB= this.handleChangeBankMB.bind(this);
        this.handleChangeBeneAccount = this.handleChangeBeneAccount.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            //get data from login
            // AccountId : state.AccountId,
            // currentBalance: state.currentBalance,
            Wallet: 'wallet-cover',
            Transfer: 'transfer-cover hidden',
            Bank:'MDQT Bank',     
            BeneAccount: 0,
            Amount: 0,  
            fee: 2200,   
        }
        
    }

    componentWillMount() {
        let AccountId = localStorage.getItem("AccountId");
        let currentBalance = localStorage.getItem("currentBalance");
        this.setState({
            AccountId : AccountId,
            currentBalance: currentBalance,
        })
    } 

    handleChangeBeneAccount(event) {
        this.setState({BeneAccount: event.target.value});
    }

    handleChangeAmount (event) {
        this.setState ({Amount: event.target.value});
    }

    handleWallet(event) {
        this.setState({Wallet: 'wallet-cover',
        Transfer: 'transfer-cover hidden'});
    }
    
    handleTransfer(event) {
        this.setState({Wallet: 'wallet-cover hidden',
        Transfer: 'transfer-cover'});
    }

    handleChangeBankMDQT(event) {
        event.preventDefault();
        this.setState ({Bank: 'MDQT Bank', fee: 2200});
    }

    handleChangeBankVCB(event) {
        event.preventDefault();
        this.setState ({Bank: 'Vietcombank', fee: 6600});
    }

    handleChangeBankTCB(event) {
        event.preventDefault();
        this.setState ({Bank: 'Techcombank', fee: 6600});
    }
    handleChangeBankBIDV(event) {
        event.preventDefault();
        this.setState ({Bank: 'BIDV', fee: 6600});
    }
    handleChangeBankMB(event) {
        event.preventDefault();
        this.setState ({Bank: 'MB Bank', fee: 6600});
    }

    check(amount, current) {
        if ((current - amount - this.state.fee) > 50000) {
            return true;
        } else{
            return false;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let {AccountId, BeneAccount, Amount, Bank,fee, currentBalance} = this.state;
        let path='http://localhost:1080/transfer/'; // declare url to server
        if ( this.check(Amount, this.state.currentBalance) ) {
            console.log('submit');
            axios.post(path,{AccountId,BeneAccount , Amount, Bank, currentBalance}) // post data to server
                .then((res) => {
                    console.log(res.data.message);
                    if(res.data.message == 'transfer successfully!') {
                        this.setState({
                            currentBalance : currentBalance - fee - Amount, 
                            Wallet: 'wallet-cover',
                            Transfer: 'transfer-cover hidden',
                        })
                    }
                    alert (`${res.data.message}`);
                })
        } else {
            alert ('Your balance not enoungh');
        } 
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
                                    <li class="nav-item sidebar-elem  ">My Wallet</li>
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
                                <form onSubmit ={this.handleSubmit}>
                                <div class={this.state.Transfer}>
                                    <ul class ="text-big">Sender Information
                                        <li class="text-small">Debit Account</li>
                                        <div class="btn-group distance">
                                            <button type="text" class=" dropdown-btn shadow-sm input-length dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <p class= "text">{this.state.AccountId}</p>
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item text-small d-flex justify-content-center" href="#">{this.state.AccountId}</a>
                                            </div>
                                        </div>
                                        <span class="text-small">Available Balance:</span>
                                        <span class="text-small">{this.state.currentBalance} VND</span>
                                    </ul>
                                    
                                    <ul class ="text-big">Beneficiary Information
                                        <li class="text-small">Beneficiary Account:</li>
                                        <input class="transfer input-length distance text" type="text" value = {this.state.BeneAccount !== 0? this.state.BeneAccount: ''}
                                            onChange = {this.handleChangeBeneAccount} ></input>
                                        <li class="text-small">Beneficiary Bank:</li>
                                        <div class="btn-group distance">
                                            <button type="text" class=" dropdown-btn shadow-sm input-length dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span class= "text">{this.state.Bank}</span>
                                            </button>
                                            <div class="dropdown-menu">
                                                <button class="dropdown-item" onClick ={this.handleChangeBankMDQT}> <span>MDQT Bank</span> </button>
                                                <button class="dropdown-item" onClick ={this.handleChangeBankVCB}> <span>Vietcombank</span> </button>
                                                <button class="dropdown-item" onClick ={this.handleChangeBankTCB}> <span>Techcombank</span> </button>
                                                <button class="dropdown-item" onClick ={this.handleChangeBankBIDV}> <span>BIDV</span> </button>
                                                <button class="dropdown-item" onClick ={this.handleChangeBankMB}> <span>MB Bank</span> </button>
                                            </div>
                                        </div>
                                    </ul>
        
                                    <ul class ="text-big">Transaction Information
                                        <li class="text-small">Amount:</li>
                                        <input class="text transfer input-length distance" type="text" value = {this.state.Amount !== 0 ? this.state.Amount :''}
                                            onChange = {this.handleChangeAmount}></input>
                                        <li class="text-small">Transaction fee:</li>
                                        <p class="dropdown-btn text transfer input-length distance" type="text">{this.state.fee}</p>
                                        <li class="text-small">Note:</li>
                                        <input class="text transfer input-length distance" type="text"></input>
                                    </ul>

                                    <div class=" distance justify-content-md-end">
                                        <button class="btn btn-primary " type="submit" value="Continue" >Submit</button>
                                    </div>
                                </div>
                                </form>
                            </div> 
                        

                        </div>

                    
                        
                </div>
            </div>    

        );
    }
}

export default UserInterface;