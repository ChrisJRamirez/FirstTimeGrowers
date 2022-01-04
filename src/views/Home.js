import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import Nav from '../components/Nav';
import Hero from '../components/Hero';

const checklist = [
  {
    name: 'AutoFlower Vs PhotoPeriods',
    subtext: 'What type of plant am I trying to grow?',
    to: 'auto-v-photo',
  },
  {
    name: 'Indoor vs. Outdoor Grow',
    subtext: '',
    to: 'indoor-v-outdoor',
  },
  {
    name: 'Lighting',
    subtext: '',
    to: 'lighting',
  },
  {
    name: 'Watering',
    subtext: '',
    to: 'watering',
  },
  {
    name: 'Soil/Nutrients',
    subtext: '',
    to: 'soil-nutrients',
  },
  {
    name: 'Fans/Airflow',
    subtext: '',
    to: 'fans-airflow',
  },
  {
    name: 'Harvesting/Curing',
    subtext: '',
    to: 'harvesting-curing',
  },
  {
    name: 'FAQ',
    subtext: '',
    to: 'faq',
  },
];

const Home = (props) => {
  return (
    <div>
      <Header />
      <Hero />
      {/* Intro into website */}
      {/* <h1 className='m-auto text-2xl text-center'>First Time Grower?</h1> */}

      {/*FTG Checklist - to the right of the paragraph above - hopefully with some sort fo weed leaf svg as bullet points*/}
      <div className='flex justify-between w-full m-auto '>
        <div className='p-10 text-lg'>
          <div className='intro-paragraph'>
            <p>
              So you decided to grow Marijuana for the first time and you don't
              know what the $%^@ you're doing?
            </p>
            <br />
            <p>
              Not a worry, we're glad you've taken the first step towards a
              lifelong hobby! The checklist to the right will breakdown the
              basics of growing, and is by no means meant to be an extensive
              breakdown of everything needed to grow award-winning Cannabis.
            </p>
            <br />
            <p>
              Our site is meant to provide the pertinent information to turn a
              seed into a flower, and we wish you success in your journey.
              Please feel free to to post any questions for help in the FAQS/Ask
              A Question section, and we will do our best to answer them.
            </p>
          </div>
          <br /> <br />
          {/* <p></p> */}
          <div>
            <img
              className='object-cover w-full h-full'
              src='https://3hlboz3j490o1qmcr2gaz7i1-wpengine.netdna-ssl.com/wp-content/uploads/2021/07/canabis-cycle.jpg.webp'
              alt='weed-plant-lifecyle'
            />
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#97aaa7',
          }}
          className='flex items-center justify-center w-full h-full m-auto rounded-lg shadow-lg lg:w-1/2'
        >
          {/* <h2 className='flex justify-center font-bold'>FTG CHECKLIST</h2> */}

          {/* add a title for the checklist */}
          <ol className='divide-y-2 divide-gray-100 bg-brown'>
            {checklist.map((item) => {
              return (
                <li className='p-3 hover:bg-brown-200 hover:text-black'>
                  <Link className='font-bold' to={item.to}>
                    {item.name}
                  </Link>
                  {item.subtext && <p>{item.subtext}</p>}
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
