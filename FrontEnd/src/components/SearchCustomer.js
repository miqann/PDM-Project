import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
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
                    <h4>Search Customer</h4>
                    <form>
                        <div class="input-group mb-1">
                            <span class="input-group-text" id="basic-addon">Customer Name</span>
                            <input type="text" name="username" class="form-control" aria-label="Username" aria-describedby="basic-addon"></input>
                            <span class="input-group-text" id="basic-addon">Customer Phone</span>
                            <input type="text" name="phone" class="form-control" aria-label="Phone" aria-describedby="basic-addon"></input>
                            <span class="input-group-text" id="basic-addon">Customer Email</span>
                            <input type="text" name="email" class="form-control" aria-label="Email" aria-describedby="basic-addon"></input>
                            <span class="input-group-text" id="basic-addon">Customer City</span>
                            <input type="text" name="city" class="form-control" aria-label="City" aria-describedby="basic-addon"></input>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <input class="btn btn-primary" type="submit" value="Search"></input>
                        </div>
                    </form>
                    <table class="table table-striped align-center">
                        <thead>
                            <tr>
                            <th scope="col">Customer ID</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Customer Phone</th>
                            <th scope="col">Customer Email</th> 
                            <th scope="col">City</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">1</td>
                                <td>Mark</td>
                                <td>0909999999</td>
                                <td>test@gmail.com</td>
                                <td>Nha Trang</td>
                            </tr>
                            <tr>
                                <td scope="row">2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@mdo</td>
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