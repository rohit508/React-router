import React, { Component } from "react";
import {Link} from "react-router-dom"
import "../index.css"






class Nav extends Component{
    render(){
        return(
            <div>
              
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <h1 className="navbar-brand" id= "logo">React Router </h1>
          {/* <a >React router</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-md-center text-left">
              <li className="nav-item">
              <Link to = "/" className="nav-link" id = "font">HOME</Link>
              </li>
              <li className="nav-item">
              <Link to = "/About" className="nav-link"  id = "font">About</Link>
              </li>
              <li className="nav-item">
                
                <Link to = "/Contact" className="nav-link"  id = "font">Contact</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>





            {/* <ul>
                <li><Link to = "/">HOME</Link></li>
                <li><Link to = "/About">About</Link></li>
                <li><Link to = "/Contact">Contact</Link></li>

                </ul> */}
        </div>
        )
    }
}

export default Nav ;