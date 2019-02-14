import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact manager!!!" />
        <Contact name="John Doe" email="John_Doe@mail.com" phone="333-33-33" />
        <Contact name="Karl" email="Karl@mail.com" phone="444-44-44" />
        <Contact name="Sara" email="Sara@mail.com" phone="555-55-55" />
      </div>
    );
  }
}

export default App;
