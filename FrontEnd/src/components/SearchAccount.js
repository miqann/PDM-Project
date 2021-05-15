import React, { Component } from 'react';
import './style.css';
import {Link } from 'react-router-dom';
import Background from './bg3.png';
class SearchCustomer extends Component {
    render() {
        return (
            // Container 
            <div style={{ backgroundImage: `url(${Background})` }} class="wrapper"> 
                {/* Header */}
                <div class="head">                
                    <header class="navbar navbar-expand navbar-light  flex-md-row">
                        <a class="navbar-brand font-weight-bold" href="./">MDQT Bank</a>
                        <div class="navbar-nav-scroll" >
                            <ul class="navbar-nav bd-navbar-nav flex-row" >
                                <li class="nav-item flex-item" >
                                    <a class="nav-link active" aria-current="page" href="./">Home</a>
                                </li>
                                <li class="nav-item flex-item">
                                    <Link class="nav-link" to="/login">Login</Link>
                                </li>
                                <li class="nav-item flex-item">
                                    <Link class="nav-link" to="/register">Signin</Link>
                                </li>
                                <li class="dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Search
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="/searchcustomer">Search Customer</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/searchaccount">Search Account</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/searchloginlog">Search LoginLog</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="/searchtransactionlog">Search TransactionLog</a>     
                                    </div>
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
                                </ul>
                            </div>
                        </div>       
                    </header>
                <div class="container">
                    <h4>Search Account</h4>
                    <form>
                        <div class="input-group mb-1">
                            <span class="input-group-text" id="basic-addon">Account ID</span>
                            <input type="text" name="accountid" class="form-control" aria-label="Accountname" aria-describedby="basic-addon"></input>
                            <span class="input-group-text" id="basic-addon">Customer Name</span>
                            <input type="text" name="username" class="form-control" aria-label="date" aria-describedby="basic-addon"></input>
                            <span class="input-group-text" id="basic-addon">Date Opened</span>
                            <input type="text" name="date" class="form-control" aria-label="balance" aria-describedby="basic-addon"></input>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <input class="btn btn-primary" type="submit" value="Search"></input>
                        </div>
                    </form>
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

                
                                        {/* <li class="nav-item ">
                                            <form class="d-flex">
                                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                                <button class="btn " type="button">
                                                    <img class="btn-size" src={Search}>
                                                    </img>
                                                </button>
                                            </form>
                                        </li> */}
            </div>
    );
    }
}

export default SearchCustomer;