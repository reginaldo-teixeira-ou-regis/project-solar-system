import { Component } from 'react';
import '../Assets/Styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>
          Si
          <span className="ellipseLeak">st</span>
          ema So
          <span className="ellipseLeak">la</span>
          r
        </h1>
        <span className="elipse"> </span>
      </header>
    );
  }
}

export default Header;
