import React from "react";
import VehicleCode from "../components/VehicleCode";
import VehicleCodesStore from "../stores/VehicleCodesStore";
import {Link} from "react-router";


export default class Allroad extends React.Component {
  constructor() {
    super();
    this.state = {
      vehicleCodes: VehicleCodesStore.getAll()
    };
  }

  render() {
    const {vehicleCodes} = this.state;

    const vehicleCodeComponents = vehicleCodes.map((vehicleCode) => {
      return <VehicleCode key={vehicleCode.id} {...vehicleCode} />;
    });

    return (
      <div class="menu-container">
        <p>
          These codes all pertain the the B8 Audi Allroad
        </p>
        <ul>
          {vehicleCodeComponents}
        </ul>
        <div class="selection-controls">
          <span class="clear-button">&lt; clear selections &gt;</span>
          <Link to='selected'>Select Codes</Link>
        </div>
      </div>
    );
  }
}
