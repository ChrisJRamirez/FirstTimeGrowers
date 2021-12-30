import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <div className="header-overall">
    <header className="bg-green text-white py-6 px-4">

      <section className="header-logo">
        <h1>First Time Growers</h1>
        {/* Logo goes here, to the right of the the name FTG */}

      </section>
       
       <div className="header-routes">
        <ol>
            <li>
              <Link to='auto-v-photo'><h3>AutoFlowers vs. PhotoPeriods</h3></Link>
              <p>What type of plant am I trying to grow?</p>
            </li>
            <li>
              <Link to='indoor-v-outdoor'><h3>Indoor vs. Outdoor Grow</h3></Link>
            </li>
            <li>
              <Link to='lighting'><h3>Lighting</h3></Link>
            </li>
            <li>
              <Link to='watering'><h3>Watering</h3></Link>
            </li>
            <li>
              <Link to='soil-nutrients'><h3>Soil/Nutrients</h3></Link>
            </li>
            <li>
              <Link to='fans-airflow'><h3>Fans/Aiflow</h3></Link>
            </li>
            <li>
              <Link to='faq'><h3>FAQ/Ask A Question</h3></Link>
            </li>
          </ol>
        </div>

    </header>
    </div>
  )
  
}

export default Header;