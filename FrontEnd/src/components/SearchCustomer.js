import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Background from './image/bg2.png';
import axios from 'axios';


class SearchCustomer extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); // bind this function
        this.handleChangeFullname= this.handleChangeFullname.bind(this);// bind this function
        this.handleChangeId= this.handleChangeId.bind(this);// bind this function
        this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this); //bind this function
        this.handleChangeEmail= this.handleChangeEmail.bind(this);// bind this function
        this.handleChangeCity= this.handleChangeCity.bind(this);// bind this function
        this.state = {
            customerId:'',
            fullName: '',
            phoneNumber:'',
            email:'',
            city: '',
            result:'',
        };
    }

    handleChangeId = (event) => {
        this.setState({customerId: event.target.value});
    }
    //set fullname from response
    handleChangeFullname = (event) => {
        this.setState({fullName: event.target.value});
        
    } 
    //set data of phonenumber when typing
    handleChangePhoneNumber = (event) => {
        this.setState({phoneNumber: event.target.value}); 
    }

    //set data of email when typing
    handleChangeEmail = (event) =>  {
        this.setState({email: event.target.value});
    }

//set data of city when typing
    handleChangeCity = (event) =>  {
        this.setState({city: event.target.value});
    }

    handleSubmit =(event) => {
        let {customerId, phoneNumber, fullName,email, city} = this.state; // declare variable using es6
        let path=`http://localhost:1080/customers/search`; // declare url to server
        event.preventDefault();
        axios.get(path, {
            params: {
                customerId: customerId,
                fullName: fullName,
                phoneNumber: phoneNumber,
                email: email,
                city:city,
            }
        }) // post data to server
            .then (res => {
                console.log(res.data);
                alert ('Get data successfully!')
                this.setState({result: res.data})
                console.log(this.state.result);
            })
            .catch(err => {
                console.log(err);
            })
      }

    render() {
        var title = this.state.result.length === 0 ? '': Object.keys(this.state.result[0]).map(item => <th scope = "col"> {item}</th>);
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
                                    <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Search
                                    </Link>
                                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link class="dropdown-item" to="/searchcustomer">Search Customer</Link>
                                            <div class="dropdown-divider"></div>
                                            <Link class="dropdown-item" to="/searchaccount">Search Account</Link>
                                            <div class="dropdown-divider"></div>
                                            <Link class="dropdown-item" to="/searchloginlog">Search LoginLog</Link>  
                                        </div>
                               </li>        
                            </ul>
                        </div>          
                    </header>

                    <div class="top">
                        <div class="bodySearch">
                            <h4>Search Customer</h4>
                            <div class="search-customer">
                                <form onSubmit={this.handleSubmit}>
                                    <div class="input-group mb-1">
                                        <span class="input-group-text" id="basic-addon">Customer Id</span>
                                        <input type="text" 
                                            name="id" 
                                            class="form-control" 
                                            aria-label="id" 
                                            aria-describedby="basic-addon"
                                            value = {this.state.customerId !== 0 ? this.state.customerId: ''}
                                            onChange = {this.handleChangeId}
                                        ></input>
                                        <span class="input-group-text" id="basic-addon">Customer Name</span>
                                        <input type="text" 
                                            name="fullName" 
                                            class="form-control" 
                                            aria-label="Username" 
                                            aria-describedby="basic-addon"
                                            value = {this.state.fullName}
                                            onChange = {this.handleChangeFullname}
                                        ></input>
                                        <span class="input-group-text" id="basic-addon">Customer Phone</span>
                                        <input type="text" 
                                            name="phoneNumber" 
                                            class="form-control" 
                                            aria-label="Phone" 
                                            aria-describedby="basic-addon"
                                            value = {this.state.phoneNumber}
                                            onChange = {this.handleChangePhoneNumber}
                                        ></input>
                                        <span class="input-group-text" id="basic-addon">Customer Email</span>
                                        <input type="text" 
                                            name="email" 
                                            class="form-control" 
                                            aria-label="Email" 
                                            aria-describedby="basic-addon"
                                            value = {this.state.email}
                                            onChange = {this.handleChangeEmail}
                                        ></input>
                                        <span class="input-group-text" id="basic-addon">Customer City</span>
                                        <input type="text" 
                                            name="city" 
                                            class="form-control" 
                                            aria-label="City" 
                                            aria-describedby="basic-addon"
                                            value = {this.state.city}
                                            onChange = {this.handleChangeCity}
                                        ></input>
                                    </div>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <input class="btn btn-primary" type="submit" value="Search"></input>
                                    </div>
                                </form>
                            </div>
                            <div class ="form">
                                <table class="table table-striped table-hover col">
                                    <thead key ="title">
                                        <tr>
                                            <th scope="col">Customer ID</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Customer Phone</th>
                                            <th scope="col">Customer Email</th> 
                                            <th scope="col">City</th> 
                                        </tr>
                                    </thead>
                                    <tbody key= "body">
                                        <tr>
                                            <td scope="row"></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
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