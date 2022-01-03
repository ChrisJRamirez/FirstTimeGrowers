import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Nav from '../components/Nav';
import Hero from '../components/Hero';

const Home = (props) => {
  return (
    <div>
      <Header />
      <Hero />
      {/* Intro into website */}
      {/* <h1 className='m-auto text-2xl text-center'>First Time Grower?</h1> */}

      {/*FTG Checklist - to the right of the paragraph above - hopefully with some sort fo weed leaf svg as bullet points*/}
      <div className='flex justify-between w-full m-auto'>
        <div>
          <p className='intro-paragraph'>
            So you decided to grow Marijuana for the first time and you don't
            know what the $%^@ you're doing? <br /> <br />
            Not a worry, we're glad you've taken the first step towards a
            lifelong hobby! The checklist to the right will breakdown the basics
            of growing, and is by no means meant to be an extensive breakdown of
            everything needed to grow award-winning Cannabis.
          </p>
          <br /> <br />
          <p>
            Our site is meant to provide the pertinent information to turn a
            seed into a flower, and we wish you success in your journey. Please
            feel free to to post any questions for help in the FAQS/Ask A
            Question section, and we will do our best to answer them.
          </p>
          {/* <img/> IMAGE SHOWING THE STAGES OF PLANT*/}
        </div>

        <div className="w-full bg-white rounded-lg shadow-lg lg:w-1/2">
          <h2 className="flex justify-center font-bold">FTG CHECKLIST</h2>
          <ol className="divide-y-2 divide-gray-100">
            <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
              <Link to='auto-v-photo'>AutoFlowers vs. PhotoPeriods</Link>
              <p>What type of plant am I trying to grow?</p>
            </li>
            <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
              <Link to='indoor-v-outdoor'>Indoor vs. Outdoor Grow</Link>
            </li>
            <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
              <Link to='lighting'>Lighting</Link>
            </li>
            <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
              <Link to='watering'>Watering</Link>
            </li>
            <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
              <Link to='soil-nutrients'>Soil/Nutrients</Link>
            </li>
            <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
              <Link to='fans-airflow'>Fans/Airflow</Link>
            </li>
            <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
              <Link to='harvesting-curing'>Harvesting/Curing</Link>
            </li>
            <li className="p-3 hover:bg-blue-600 hover:text-blue-200">
              <Link to='fans-airflow'>FORUM - ASK A QUESTION</Link>
            </li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
