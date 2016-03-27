import React from "react";


export default class Allroad extends React.Component {
  constructor() {
    super();
    this.state = {
      vehicleCodes: [
        {
          description: "Disable after-wipe of windscreen wipers",
          procedure: "[09 – Cent. Elect.][Coding - 07][Dropdown]  x ** 8K1 955 119 ** WWS xxxx Long Coding Helper -> Byte 1 Bit 3 - Remove check mark (1 = active)"
        },
        {
          description: "Disable amber corner lights",
          procedure: "[09 – Cent. Elect.][Coding - 07] Long Coding Helper Byte 10 Submodule 0 Bit 3 - Set to 0 to disable amber side markers (U.S. vehicles)"
        }
      ]
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
        </div>
    );
  }
}
