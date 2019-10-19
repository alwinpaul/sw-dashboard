import React, { Component } from "react";
import { Header } from "./Components/Header/Header";
import { Root } from "./Components/Root/Root";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideNav: true
    };
  }

  toggleSideNav() {
    this.setState({
      showSideNav: !this.state.showSideNav
    });
  }
  render() {
    return (
      <>
        <Header
          showNav={this.state.showSideNav}
          toggleNav={() => this.toggleSideNav()}
        />
        <Root showNav={this.state.showSideNav} />
      </>
    );
  }
}

export default App;
