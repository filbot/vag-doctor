import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VehicleCodesStore from "../stores/VehicleCodesStore";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      vehicleCodes: VehicleCodesStore.getAll()
    };
  }

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
