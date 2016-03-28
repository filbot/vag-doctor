import React from "react";

export default class VehicleCode extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const {selected, description} = this.props;
    const icon = selected ? "x" : " "

    return (
      <li>
        <span>[{icon}] {description}</span>
      </li>
    );
  }
}
