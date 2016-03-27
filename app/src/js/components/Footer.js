import React from "react";
import {Link} from "react-router";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link to='/'>Start Over | </Link>
        <Link to='howto'>How To | </Link>
        <Link to='contact'>Contact Us</Link>
      </footer>
    );
  }
}
