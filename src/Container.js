import React, { Component } from "react";

import checkbox1 from "./Checkbox1";

class Container extends Component {
   render() {
      return (
         <div className="container">
            <div className="check">
               <checkbox1/>
            </div>
         </div>
      );
   }
}

export default Container;
