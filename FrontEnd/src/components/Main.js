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
                {/* Header */}
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand font-weight-bold" href="#">Our Bank</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider"></hr></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Everythings you need are here</a>
                                </li>
                            </ul>

                {/*Dark Mode Button*/}
                <div class="custom-control custom-switch mr-5">
                  <input type="checkbox" class="custom-control-input" id="selector"/>
                  <label class="custom-control-label" for="selector">Dark Mode</label>
                </div>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
                
                {/* Side Bar */}
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
                   
            
            {/* Move to Login + Register Page*/}
                        <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div class="img">
                                    <img src="https://sep.yimg.com/ay/ytimes/       aabaco-yahoo-store-customer-registration-3.png"/>
                                </div>
                                <div class="cover">
                                    <h2>Have an account?</h2>
                                    <a class="btn btn-primary" href="#">Login now!</a>
                                </div>
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div class="img">
                                    <img src="https://sep.yimg.com/ay/ytimes/       aabaco-yahoo-store-customer-registration-3.png"/>
                                </div>
                                <div class="cover">
                                    <h2>Don't have an account yet?</h2>
                                    <a href="#" class="btn btn-primary">Register now!</a>
                                </div>   
                            </div>
                        </div>       
                    </div>
            </div>
    );
    }
}

export default Main;