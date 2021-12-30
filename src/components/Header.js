import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header-overall">
      <section className="header-logo">
        <h1>First Time Growers</h1>
        {/* Logo goes here, to the right of the the name FTG */}

      </section>
       
       <div className="header-routes">
        <ol>
            <li>
              <Link to='auto-v-photo'><h5>AutoFlowers vs. PhotoPeriods</h5></Link>
              <p>What type of plant am I trying to grow?</p>
            </li>
            <li>
              <Link to='indoor-v-outdoor'><h5>Indoor vs. Outdoor Grow</h5></Link>
            </li>
            <li>
              <Link to='lighting'><h5>Lighting</h5></Link>
            </li>
            <li>
              <Link to='watering'><h5>Watering</h5></Link>
            </li>
            <li>
              <Link to='soil-nutrients'><h5>Soil/Nutrients</h5></Link>
            </li>
            <li>
              <Link to='fans-airflow'><h5>Fans/Aiflow</h5></Link>
            </li>
            <li>
              <Link to='faq'><h5>FAQ/Ask A Question</h5></Link>
            </li>
          </ol>
        </div>

    
    </div>
  )
  
}

export default Header;