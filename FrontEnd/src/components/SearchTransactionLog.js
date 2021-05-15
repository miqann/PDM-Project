import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Background from './image/bg2.png';



class SearchTransactionLog extends Component {
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
                                    <Link class="nav-link active" aria-current="page" to="./">Home</Link>
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
                                            <Link class="dropdown-item" to="/searchloginlog">Login Status</Link>
                                            <div class="dropdown-divider"></div>
                                            <Link class="dropdown-item" to="/searchtransactionlog">Transaction Status</Link>     
                                        </div>
                               </li>        
                            </ul>
                        </div>          
                    </header>

                    <div class="top">
                        <div class="bodySearch">
                            <h4>Transaction Status</h4>
                            <div class="search-login-status">
                                <form>
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon">Account ID</span>
                                        <input type="text" name="accountid" class="form-control" aria-label="accountid" aria-describedby="basic-addon"></input>
                                        <span class="input-group-text" id="basic-addon">Customer ID</span>
                                        <input type="text" name="customerid" class="form-control" aria-label="customerid" aria-describedby="basic-addon"></input>
                                    </div>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <input class="btn btn-primary" type="submit" value="Search"></input>
                                    </div>
                                </form>
                            </div>

                            <div class = "form">
                                <table class="table table-striped align-center">
                                    <thead>
                                        <tr>
                                        <th scope="col">Transaction ID</th>
                                        <th scope="col">Transaction Date</th>
                                        <th scope="col">Transaction Type</th>
                                        <th scope="col">Transaction Account</th>
                                        <th scope="col">Transaction Amount</th>
                                        <th scope="col">Transaction Status</th> 
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">1</td>
                                            <td>Mark</td>
                                            <td>0909999999</td>
                                            <td>test@gmail.com</td>
                                            <td>5.000.000</td>
                                            <td>Nha Trang</td>
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

export default SearchTransactionLog;