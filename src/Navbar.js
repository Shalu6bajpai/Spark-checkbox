import React, { Component, Fragment } from "react";
import "./App.css";

class Navbar extends Component {
   render() {
      return (
         <Fragment>
            <nav className="nav">
               <div className="logo">Logo</div>
               <div className="menu">
                  <button>Home</button>
                  <button>My Portfolio</button>
                  <button>Clients</button>
                  <button>Get in Touch</button>
               </div>
            </nav>
         </Fragment>
      );
   }
}

export default Navbar;
