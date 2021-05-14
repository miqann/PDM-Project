import React, { Component } from 'react';
import LoginPage from './LoginPage';
import './style.css';

function validate(){
    console.log(LoginPage);
}
class Main extends Component {
    render() {
        return (
            <div class="wrapper"> {/*Menu components*/}
            <nav id="sidebar">
                 <div class="sidebar-header">
                     <h1>MENU</h1>  
                 </div>
                 <ul class="list-unstyled components">
                     <p>The Providers</p>
                     <li class="active">
                         <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                       <ul class="collapse list-unstyled" id="homeSubmenu">
                           <li>
                               <a href="#">Home 1</a>
                           </li>
                           <li>
                               <a href="#">Home 2</a>
                           </li>
                       </ul>
                     </li>
                     <li>
                         <a href="#">About</a>
                     </li>
                     <li>
                         <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                         <ul class="collapse list-unstyled" id="pageSubmenu">
                             <li>
                                 <a href="#">Page 1</a>
                             </li>
                             <li>
                                 <a href="#">Page 2</a>
                             </li>
                         </ul>
                    </li>
                    <li>
                        <a href="#">Policy</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                 </ul>
            </nav>
           
           {/* Button Sidebar */}
           <div id="content">
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                 <div class="container-fluid">
                     <button type="button" id="sidebarCollapse" class="btn  btn-info">
                         <i class="fas fa-align-left"></i>
                         <span> Sidebar</span>
                     </button>
                 </div>
                   </nav>
                   <br></br>
            
            {/* Move to Login + Register Page*/}
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div class="img">
                    <img src="https://sep.yimg.com/ay/ytimes/aabaco-yahoo-store-customer-registration-3.png"/>
                </div>
                    <div class="cover">
                        <h2>Have an account?</h2>
                        <a class="btn btn-primary" href="#">Login now!</a>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div class="img">
                    <img src="https://sep.yimg.com/ay/ytimes/aabaco-yahoo-store-customer-registration-3.png"/>
                </div>
                    <div class="cover">
                        <h2>Don't have an account yet?</h2>
                        <a href="RegisterPage.js" class="btn btn-primary">Register now!</a>
                    </div>   
                </div>
            </div>       
    </div>
    </div>
    );
    }
}

export default Main;