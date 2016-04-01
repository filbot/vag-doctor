import React from "react";

export default class VehicleCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    var selected = !this.state.isSelected;
    this.setState({ isSelected: true });
  }

  render() {
    const {description} = this.props;
    const icon = this.state.isSelected ? "x" : " ";

    return (
      <li class={this.state.isSelected ? 'selected' : ''} onClick={this.handleClick}>
        <span>[{icon}] {description}</span>
      </li>
    );
  }
}
