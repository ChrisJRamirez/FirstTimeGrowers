import Shariq from '/Users/chrisjramirez/Documents/FirstTimeGrowers/FirstTimeGrowers/src/assets/ShariqLinkedIn.jpeg';
import Chris from '/Users/chrisjramirez/Documents/FirstTimeGrowers/FirstTimeGrowers/src/assets/ChrisLinkedIn.jpeg';


const Contact = (props) => {
  return (
  <div>
    <div>
      <div className='flex items-center justify-center'>
        <img
        src= {Shariq}
        alt='Shariq-at-airport'
        className="h-96 w-96"
        >
        </img>
        <img
        src= {Chris}
        alt='Chris-in-backyard'
        className="h-96 w-96"
        >
        </img>
      </div>
      <p className='text-center'>
          Our names are Shariq (left) and Chris (right). 
          We are happy you have taken the time to visit our website, and hope you have found it to be helpful on your journey.
      </p>
      <p className='text-center'>
        We met in April of 2021 when we both started at BloomTech fka Lambda School. 
        Throughout our coding journey, we have worked together (more so Shariq helping me) and are amazed at how much we have learned!
        With First Time Growers, we hope to help a new generation of growers develop a hobby for the rest of their lives.
        
      </p>
    </div>
  </div>
  )
};

export default Contact;
