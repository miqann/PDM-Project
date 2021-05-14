import React, { Component } from 'react';
import './RegisterPage.css';

class RegisterPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: 'Ho chi Minh'};
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        alert('Successfully Register!');
        event.preventDefault();
      }

    render (){
        return (
            <div class="main">
            <div class="logo"></div>
            <div class="title">Register Page</div>
            <form onSubmit={this.handleSubmit}>
                <div class="credentials">
                    <div class="username">
                        <span class="glyphicon glyphicon-user"></span>
                        <input type="text" name="username" placeholder="Username" required="true"></input>
                    </div>
                    <div class="phone">
                        <span class="glyphicon glyphicon-phone"></span>
                        <input type="text" name="phone" placeholder="Phone number" required="true"></input>
                    </div>
                    <div class="email">
                        <span class="glyphicon glyphicon-envelope"></span>
                        <input type="text" name="username" placeholder="Email address" required="true"></input>
                    </div>
                    <div class="city">
                        <span class="glyphicon glyphicon-home"></span>
                        <select class="form-select" required="true">
                            <option selected>Choose your city</option>
                            <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                            <option value="Da Nang">Da Nang</option>
                            <option value="Hue">Hue</option>
                            <option value="Nha Trang">Nha Trang</option>
                        </select>
                    </div>
                    <div class="password">
                        <span class="glyphicon glyphicon-lock"></span>
                        <input type="password" name="password" placeholder="Password" required="true"></input>
                    </div>
                </div>
                <button type="submit" class="submit">Register</button>
            </form>
            <div class="link">
                <a href="#">Need help?</a>&nbsp;<a href="#">Contact us.</a> 
            </div>
            </div>
            );
    }
}

export default RegisterPage;