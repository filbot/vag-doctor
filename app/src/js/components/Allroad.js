import React from "react";
import VehicleCode from "../components/VehicleCode";
import ClearSelections from "../components/ClearSelections";
import {Link} from "react-router";


export default class Allroad extends React.Component {
  constructor() {
    super();
  }

  render() {
    const vehicleCodes = this.state;
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
          <ClearSelections />
          <Link to='selected'>Select Codes</Link>
        </div>
      </div>
    );
  }
}
