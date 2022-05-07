import Home from './views/Home';
import FAQ from './views/FAQ';
import AutoVPhoto from './views/AutoVPhoto';
import Lighting from './views/Lighting';
import IndoorVOutdoor from './views/IndoorVOutdoor';
import SoilNutrients from './views/SoilNutrients';
import Watering from './views/Watering';
import FansAirflow from './views/FansAirflow';
import HarvestingCuring from './views/HarvestingCuring';
import Seed from './views/Seed';
import Header from './components/Header';
import Footer from './components/Footer';
import Legality from './views/Legality';
import Contact from './views/ContactTeam';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#EADDCA',
      }}
    >
      {/* <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'> */}
      <div className='w-full mx-auto'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/faq' element={<FAQ />}></Route>
          <Route path='/auto-v-photo' element={<AutoVPhoto />}></Route>
          <Route path='/lighting' element={<Lighting />}></Route>
          <Route path='/indoor-v-outdoor' element={<IndoorVOutdoor />}></Route>
          <Route path='/soil-nutrients' element={<SoilNutrients />}></Route>
          <Route path='/watering' element={<Watering />}></Route>
          <Route path='/fans-airflow' element={<FansAirflow />}></Route>
          <Route
            path='/harvesting-curing'
            element={<HarvestingCuring />}
          ></Route>
          <Route path='/seed' element={<Seed />}></Route>
          <Route path='/legality' element={<Legality />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
