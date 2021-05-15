import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
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
                        <div class="bodySearch">
                            <h4>Search Customer</h4>
                            <div class="search-customer">
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
                            </div>
                            <div class ="form">
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
                    </div>   
                </div>
            </div>
    );
    }
}

export default SearchCustomer;