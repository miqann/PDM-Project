import React from 'react';
//import {Layout, Form, Input, Button, Checkbox} from 'antd';
import '../css/LoginPage.css';
import image from '../image/logo.jpg';

class Register extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src = {image}/>
                </div>

                <div className ="form">
                    <div className ="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className ="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="email"/>
                    </div>
                    <div className ="form-group">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" placeholder="pass"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type ="submit" className="btn">Register</button>
            </div>
        </div>
        )
    }
}

export default Register;