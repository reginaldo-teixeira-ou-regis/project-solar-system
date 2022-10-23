import { Component } from 'react';
import PropTypes from 'prop-types';
import '../Assets/Styles/PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planetCard" data-testid="planet-card">
        <img
          src={ planetImage.image }
          width={ planetImage.width }
          alt={ `Planeta ${planetName}` }
        />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;
