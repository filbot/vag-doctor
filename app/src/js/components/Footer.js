import React from "react";
import {Link} from "react-router";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Link to='howto'>how to | ></Link>
        <Link to='contact'>contact us | ></Link>
        <Link to='video'>instructional video save></Link>
      </footer>
    );
  }
}
