import { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../Assets/Styles/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div className="solarSystem" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets">
          {planets.map(({ name, image, width }) => (
            <PlanetCard
              planetName={ name }
              planetImage={ { image, width } }
              key={ name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
