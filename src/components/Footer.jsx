import { Component } from 'react';
import '../Assets/Styles/Footer.css';
import { VscGithub } from 'react-icons/vsc';
import { GrLinkedin } from 'react-icons/gr';

class Footer extends Component {
  render() {
    return (
      <div className="containerFooter">
        <div className="copyRightContainer">
          <span className="copyRight">
            <span className="iconCopyRight">©</span>
            opyright 2022
          </span>
          {' '}
          -
          {' '}
          <span>Todos os Direitos Reservados</span>
        </div>
        <div className="containerIcoms">
          <span className="iconsSocial">
            Reginaldo Teixeira
            <a className="LinkedinIcon" href="https://www.linkedin.com/in/reginaldoteixeiraouregis/" target="_blank" rel="noopener noreferrer">
              <GrLinkedin />
            </a>
            <a className="gitHubIcon" href="https://github.com/reginaldo-teixeira-ou-regis" target="_blank" rel="noopener noreferrer">
              <VscGithub />
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
