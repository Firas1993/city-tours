import React from "react";

import "./App.scss";

import Navbar from "./component/Navbar/Navbar";
import TourList from "./component/TourList";

class App extends React.Component {
  
  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <TourList />
      </React.Fragment>
    );
  }
}

export default App;
