import Header from '../components/Header';
import Footer from '../components/Footer';

const AutoVPhoto = (props) => {
  return (
    <div>
      <Header/>
      <h1>AutoVPhoto</h1>
      <div>
        <p>So what is the difference between AutoFlowers and PhotoPeriod plants?</p>
        <p>We are happy you asked, the main difference is the amount of light required for each of thse plants to grow</p>
        <p>AutoFlowers will go through all the stages of their life-cycle regardless of hours of light, while PhotoPeriods
          require certain amounts of light to move beyond each cycle.
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default AutoVPhoto;
