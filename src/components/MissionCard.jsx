import { Component } from 'react';
import PropTypes from 'prop-types';
import '../Assets/Styles/MissionCard.css';
import IconLocal from '../images/Vector-1.svg';
import IconFlag from '../images/Vector-2.svg';
import IconCalendar from '../images/Vector.svg';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="card" data-testid="mission-card">
        <p className="name" data-testid="mission-name">{name}</p>
        <section className="info">
          <div className="yearCountry">
            <img src={ IconCalendar } alt="" />
            <p className="year" data-testid="mission-year">{year}</p>
            <img src={ IconLocal } alt="" />
            <p className="country" data-testid="mission-country">{country}</p>
          </div>
          <img src={ IconFlag } alt="" />
          <p className="destination" data-testid="mission-destination">{destination}</p>
        </section>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
}.isRequired;

export default MissionCard;
