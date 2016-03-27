import React from "react";
import {Link} from "react-router";

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <p>
          We know Coming your VAG can be difficult and time consuming, let us make it easier for you. Pick the car you have, the things you want to modify and let us prepare all the needed codes.
        </p>
        <div class="button-container">
          <Link to='a4'>A4 (B8)</Link>
          <Link to='s4'>S4 (B8)</Link>
          <Link to='allroad'>Allroad (B8)</Link>
        </div>
      </div>
    );
  }
}
