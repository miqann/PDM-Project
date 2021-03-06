import React, { Component } from 'react';
import './style.css';
import {Link } from 'react-router-dom';
import Background from './image/bg2.png';
import axios from 'axios';

class SearchCustomer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); // bind this function
        this.handleChangefullname= this.handleChangefullname.bind(this);// bind this function
        this.handleChangeAccountId= this.handleChangeAccountId.bind(this);// bind this function
        this.handleChangeAccountStatus= this.handleChangeAccountStatus.bind(this);// bind this function
        this.handleChangeCustomerId= this.handleChangeCustomerId.bind(this); //bind this function
        this.state = {
            AccountId: '',
            customerId:'',
            AccountStatus:'',
            fullName: '',
            result:'',
        };
    }

     //set data of phonenumber when typing
     handleChangefullname = (event) => {
        this.setState({fullName: event.target.value}); 
    }

    //set data of email when typing
    handleChangeAccountId = (event) =>  {
        this.setState({AccountId: event.target.value});
    }

    handleChangeAccountStatus = (event) =>  {
        this.setState({AccountStatus: event.target.value});
    }

//set data of city when typing
    handleChangeCustomerId = (event) =>  {
        this.setState({customerId: event.target.value});
    }

    handleSubmit =(event) => {
        let {customerId, AccountId, fullName, AccountStatus} = this.state; // declare variable using es6
        let path=`http://localhost:1080/account/search`; // declare url to server
        event.preventDefault();
        axios.get(path, {
            params: {
                AccountId: AccountId,
                customerId: customerId,
                fullName: fullName,
                AccountStatus:AccountStatus
            }
        }) // post data to server
            .then (res => {
                console.log(res.data);
                this.setState({result: res.data});
                if(this.state.result.length !== 0) {
                    alert ('Get data successfully!');
                }
                else {
                    alert('Not Found!');
                }
                console.log(this.state.result);
            })
            .catch(err => {
                console.log(err);
            })
      }

    render() {
        var title = this.state.result.length === 0 ? '': Object.keys(this.state.result[0]).map(item => <th scope = "col"> {item.substring(item.indexOf('.')+1)}</th>);
        var body = this.state.result.length === 0 ? '' :this.state.result.map((item, index) => { return <tr key ={index}> {Object.values(item).map((item, index) => {return <td key={index}>{item}</td>})}</tr>});
        
        return (
            // Container 
            <div style={{ backgroundImage: `url(${Background})` }} class="wrapper"> 
                {/* Header */}
                <div class="head">                
                    <header class="navbar-expand  flex-row flex-md-row">
                        <Link class=" brand" to="./">MDQT BANK</Link>
                        <div class="searching" >
                            <ul class="navbar-nav" >
                                <li class="nav-item flex-item" >
                                    <a class="nav-link active" aria-current="page" href="./">Home</a>
                                </li>
                                <li class=" nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Search
                                    </a>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link class="dropdown-item" to="/searchcustomer">Search Customer</Link>
                                            <div class="dropdown-divider"></div>
                                            <Link class="dropdown-item" to="/searchaccount">Search Account</Link>
                                            <div class="dropdown-divider"></div>
                                            <Link class="dropdown-item" to="/searchloginlog">Search LoginLog</Link>  
                                            <div class="dropdown-divider"></div>
                                            <Link class="dropdown-item" to="/query">Query</Link> 
                                        </div>
                               </li>        
                               
                               
                            </ul>
                        </div>          
                    </header> 

                    <div class="top">   
                        <div class = "bodySearch">
                            <h4>Search Account</h4>
                            <div class = "search">
                                <form onSubmit={this.handleSubmit}>
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon">Account ID</span>
                                        <input type="text" 
                                            name="accountId" 
                                            class="form-control" 
                                            aria-label="Accountname"  
                                            aria-describedby="basic-addon"
                                            value = {this.state.AccountId !== 0 ? this.state.AccountId : ''}
                                            onChange = {this.handleChangeAccountId}></input>
                                        <span class="input-group-text" id="basic-addon">Customer ID</span>
                                        <input type="text" 
                                            name="customerId" 
                                            class="form-control" 
                                            aria-label="date" 
                                            aria-describedby="basic-addon"
                                            value = {this.state.customerId !== 0 ? this.state.customerId : ''}
                                            onChange = {this.handleChangeCustomerId}></input>
                                        <span class="input-group-text" id="basic-addon">Customer Name</span>
                                        <input type="text" 
                                            name="fullName" 
                                            class="form-control" 
                                            aria-label="balance" 
                                            aria-describedby="basic-addon"
                                            value = {this.state.fullName}
                                            onChange = {this.handleChangefullname}></input>
                                        <span class="input-group-text" id="basic-addon">Account status</span>
                                        <input type="text" 
                                            name="accountStatus" 
                                            class="form-control" 
                                            aria-label="balance" 
                                            aria-describedby="basic-addon"
                                            value = {this.state.AccountStatus}
                                            onChange = {this.handleChangeAccountStatus}></input>
                                    </div>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button class="btn btn-primary " type="submit" value="Search">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div class = "form">
                            <table class="table align-center table-hover table-striped">
                                <thead>
                                    <tr>
                                        {title}
                                    </tr>
                                </thead>
                                <tbody>
                                   {body}
                                </tbody>
                            </table>
                            </div>
                            
                        </div>                   
                    </div>   
                </div>
            </div>
    );
    }
}

export default SearchCustomer;