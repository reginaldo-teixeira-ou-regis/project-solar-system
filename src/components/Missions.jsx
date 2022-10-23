import { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../Assets/Styles/Missions.css';

class Missions extends Component {
  render() {
    return (
      <div className="missions" data-testid="missions">
        <Title headline="Missões" />
        <section>
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Missions;
