import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';


const Home = (props) => {
  return (
    <div>
      <Header />
      <Nav />

      {/* Intro into website */}
      <h1 className="m-auto text-2xl text-center">First Time Growers</h1>
      <div>
        <p className='intro-paragraph'>
          So you decided to grow Marijuana for the first time and you don't know
          what the $%^@ you're doing? <br></br>
          Not a worry, we're glad you've taken the first step towards a lifelong
          hobby! <br></br>
          The checklist to the right will breakdown the basics of growing, and
          is by no means meant to be an extensive breakdown of everything
          <br></br>
          needed to grow award-winning Cannabis.
        </p>
        <p>
          Our site is meant to provide the pertinent information to turn a seed
          into a flower, and we wish you success in your journey.<br></br>
          Please feel free to to post any questions for help in the FAQS/Ask A Question
          section, and we will do our best to answer them.
        </p>
        {/* <img/> IMAGE SHOWING THE STAGES OF PLANT*/}
      </div>

      {/*FTG Checklist - to the right of the paragraph above - hopefully with some sort fo weed leaf svg as bullet points*/}
      <div className='FTG-Checklist'>
        <h3>FTG Checklist</h3>
        <ol>
          <li>
            <Link to='auto-v-photo'>AutoFlowers vs. PhotoPeriods</Link>
            What type of plant am I trying to grow?
          </li>
          <li>
            <Link to='indoor-v-outdoor'>Indoor vs. Outdoor Grow</Link>
          </li>
          <li>
            <Link to='lighting'>Lighting</Link>
          </li>
          <li>
            <Link to='watering'>Watering</Link>
          </li>
          <li>
            <Link to='soil-nutrients'>Soil/Nutrients</Link>
          </li>
          <li>
            <Link to='fans-airflow'>Fans/Airflow</Link>
          </li>
        </ol>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
