import Shariq from '../assets//ShariqLinkedIn.jpeg';
import Chris from '../assets/ChrisLinkedIn.jpeg';

const Contact = (props) => {
  return (
    <div>
      <div>
        <div className='flex items-center justify-center'>
          <div>
            <img src={Shariq} alt='Shariq-at-airport' className='h-96 w-96' />
            <a href='https://www.linkedin.com/in/shariqali-dev/'>
              <h2 className='text-center'>Shariq</h2>
            </a>
          </div>
          <div>
            <img src={Chris} alt='Chris-in-backyard' className='h-96 w-96' />
            <a href='https://www.linkedin.com/in/christopher-j-ramirez/'>
              <h2 className='text-center'>Chris</h2>
            </a>
          </div>
        </div>
        <section className='p-4'>
          <p className='text-center'>
            We are happy you have taken the time to visit our website, and hope
            you have found it to be helpful on your journey.
          </p>
          <p className='w-5/6 m-auto text-center'>
            We met in April of 2021 when we both started at BloomTech fka Lambda
            School. Throughout our coding journey, we have worked together and
            are amazed at how much we have learned! With First Time Growers, we
            hope to help a new generation of growers develop a hobby for the
            rest of their lives.
          </p>
        </section>
        <br />
      </div>
    </div>
  );
};

export default Contact;
