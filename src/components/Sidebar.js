import React, { Component } from 'react';
import './style.css';

class Sidebar extends Component {
    render() {
        return (
            <div class="wrapper">
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
           
           <div id="content">
               
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                 <div class="container-fluid">
                     <button type="button" id="sidebarCollapse" class="btn  btn-info">
                         <i class="fas fa-align-left"></i>
                         <span>Toggle Sidebar</span>
                     </button>
                 </div>
                   </nav>
                   <br></br>
    <h1>Login</h1>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

  <div class="line"></div>
  <h1>Lorem Ipsum</h1>

   <p>
    	It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    	
    </p>
        </div>
        </div>
        );
    }
}

export default Sidebar;