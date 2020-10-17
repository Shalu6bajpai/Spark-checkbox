import React, { Fragment } from "react";

import "./App.css";
import Navbar from "./Navbar";
import Container from "./Container";

class App extends React.Component {
   render() {
      return (
         <Fragment>
            <Navbar />
            <Container />
         </Fragment>
      );
   }
}

export default App;
