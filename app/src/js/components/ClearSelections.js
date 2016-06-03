import React from "react";

export default class ClearSelections extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log('filbot is Clearing selections');
    console.log(this);
  }

  render() {
    return (
      <span class="clear-selections-button" onClick={this.handleClick}>&lt; clear selections &gt;</span>
    );
  }
}
