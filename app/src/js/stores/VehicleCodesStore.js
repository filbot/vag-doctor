import {EventEmitter} from 'events';

class VehicleCodesStore extends EventEmitter {
  constructor() {
    super();
    this.vehicleCodes = [
      {
        id: 1001,
        selected: false,
        description: "Disable after-wipe of windscreen wipers",
        procedure: "[09 – Cent. Elect.][Coding - 07][Dropdown]  x ** 8K1 955 119 ** WWS xxxx Long Coding Helper -> Byte 1 Bit 3 - Remove check mark (1 = active)"
      },
      {
        id: 1002,
        selected: true,
        description: "Disable amber corner lights",
        procedure: "[09 – Cent. Elect.][Coding - 07] Long Coding Helper Byte 10 Submodule 0 Bit 3 - Set to 0 to disable amber side markers (U.S. vehicles)"
      },
      {
        id: 1003,
        selected: false,
        description: "Disable key warning (keyless models)",
        procedure: "[46 – Central Conv.][Coding - 07] Long Coding Helper Byte 9 Bit 7 set to 0 (Uncheck)"
      },
      {
        id: 1004,
        selected: false,
        description: "Disable LED 'wink' on turn signal",
        procedure: "[09 – Cent. Elect.][Coding - 07] Long Coding Helper Byte 3 Bit 2 - LEDs remain at full brightness with parking lights (1 = active) Bit 7 - Turn off LED-strip DRLs with indicators (1 = active)"
      },
      {
        id: 1005,
        selected: false,
        description: "Disable \"Lights Are On\" warning",
        procedure: "[09 – Cent. Elect.][Coding - 07] Long Coding Helper Byte 5 Bit 3 - Set to 0 to disable \"lights are on\" warning when you open the door."
      },
      {
        id: 1006,
        selected: false,
        description: "Disable NAV & Phone warning messages while entering data at speed",
        procedure: "[5F - Information Electr.] Adaptation Set channel 2 & 3 to 250"
      },
      {
        id: 1007,
        selected: false,
        description: "Disable Seatbelt Chime",
        procedure: "[17 - Instruments][Coding - 07] Long Coding Helper Byte 0 Bit 2-4 – Seat Belt Warning inactive"
      }
    ];
  }

  getAll() {
    return this.vehicleCodes;
  }
}

const vehicleCodesStore = new VehicleCodesStore;

export default vehicleCodesStore;
