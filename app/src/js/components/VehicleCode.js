import React from "react";

export default class VehicleCode extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const {description} = this.props;

    return (
      <li>
        <span>{description}</span>
      </li>
    );
  }
}
