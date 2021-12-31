import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <Link to='auto-v-photo'>
        <h3>AutoFlowers vs. PhotoPeriods</h3>
      </Link>
      <Link to='indoor-v-outdoor'>
        <h3>Indoor vs. Outdoor Grow</h3>
      </Link>
      <Link to='lighting'>
        <h3>Lighting</h3>
      </Link>
      <Link to='watering'>
        <h3>Watering</h3>
      </Link>
      <Link to='soil-nutrients'>
        <h3>Soil/Nutrients</h3>
      </Link>
      <Link to='fans-airflow'>
        <h3>Fans/Airflow</h3>
      </Link>
      <Link to='faq'>
        <h3>FAQ/Ask A Question</h3>
      </Link>
    </nav>
  );
};

export default Nav;
