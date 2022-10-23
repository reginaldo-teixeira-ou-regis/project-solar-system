import { Component } from 'react';
import '../Assets/Styles/Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>Sistema Solar</h1>
        <span className="elipse"> </span>
      </header>
    );
  }
}

export default Header;
