import React, { Component } from 'react';
import './style.css';
import {Link } from 'react-router-dom';
import Background from './image/bg2.png';
class SearchCustomer extends Component {
    render() {
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
                                    <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Search
                                    </Link>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link class="dropdown-item" to="/searchcustomer">Search Customer</Link>
                                            <div class="dropdown-divider"></div>
                                            <Link class="dropdown-item" to="/searchaccount">Search Account</Link>
                                            <div class="dropdown-divider"></div>
                                            <Link class="dropdown-item" to="/searchloginlog">Search LoginLog</Link>
                                            <div class="dropdown-divider"></div>
                                            <Link class="dropdown-item" to="/searchtransactionlog">Search TransactionLog</Link>     
                                        </div>
                               </li>        
                            </ul>
                        </div>          
                    </header> 

                    <div class="top">   
                        <div class = "bodySearch">
                            <h4>Search Account</h4>
                            <div class = "search">
                                <form >
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon">Account ID</span>
                                        <input type="text" name="accountid" class="form-control" aria-label="Accountname" aria-describedby="basic-addon"></input>
                                        <span class="input-group-text" id="basic-addon">Customer Name</span>
                                        <input type="text" name="username" class="form-control" aria-label="date" aria-describedby="basic-addon"></input>
                                        <span class="input-group-text" id="basic-addon">Date Opened</span>
                                        <input type="text" name="date" class="form-control" aria-label="balance" aria-describedby="basic-addon"></input>
                                    </div>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button class="btn btn-primary " type="submit" value="Search">Search</button>
                                    </div>
                                </form>
                            </div>
                            <div class = "form">
                            <table class="table align-center table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Acount ID</th>
                                        <th scope="col">Account Name</th>
                                        <th scope="col">Customer ID</th>
                                        <th scope="col">Customer Name</th> 
                                        <th scope="col">Date Opened</th> 
                                        <th scope="col">Account Status</th> 
                                        <th scope="col">Account Type</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td scope="row">1</td>
                                            <td>Mark</td>
                                            <td>01</td>
                                            <td>Phan Thi</td>
                                            <td>19/05/2020</td>
                                            <td>Online</td>
                                            <td>Vjp</td>
                                        </tr>
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