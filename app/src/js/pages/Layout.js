import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default class Layout extends React.Component {
  render() {
    return (
      <div class="app-container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
