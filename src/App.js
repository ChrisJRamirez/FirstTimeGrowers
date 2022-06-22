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
import AdminLogin from './views/AdminLogin';
import PrivateRoute from './components/PrivateRoute';
import Admin from './views/Admin';

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
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<AdminLogin />} />
          <Route
            path='admin'
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/auto-v-photo' element={<AutoVPhoto />} />
          <Route path='/lighting' element={<Lighting />} />
          <Route path='/indoor-v-outdoor' element={<IndoorVOutdoor />} />
          <Route path='/soil-nutrients' element={<SoilNutrients />} />
          <Route path='/watering' element={<Watering />} />
          <Route path='/fans-airflow' element={<FansAirflow />} />
          <Route path='/harvesting-curing' element={<HarvestingCuring />} />
          <Route path='/seed' element={<Seed />} />
          <Route path='/legality' element={<Legality />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
