import React from "react";
import {Link} from "react-router";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link to='/'>Home</Link>
        <span>|</span>
        <Link to='howto'>Instructions</Link>
        <span>|</span>
        <Link to='contact'>Contact Us</Link>
      </footer>
    );
  }
}
