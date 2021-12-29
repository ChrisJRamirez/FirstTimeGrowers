import Home from "./views/Home";
import FAQ from "./views/FAQ";
import AutoVPhoto from "./views/AutoVPhoto";
import Lighting from "./views/Lighting";
import IndoorVOutdoor from "./views/IndoorVOutdoor";
import SoilNutrients from "./views/SoilNutrients";
import Watering from "./views/Watering";
import FansAirflow from "./views/FansAirflow"

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/faq' element={<FAQ />}></Route>
        <Route path='/auto-v-photo' element={<AutoVPhoto />}></Route>
        <Route path='/lighting' element={<Lighting />}></Route>
        <Route path='/indoor-v-outdoor' element={<IndoorVOutdoor />}></Route>
        <Route path='/soil-nutrients' element={<SoilNutrients />}></Route>
        <Route path='/watering' element={<Watering />}></Route>
        <Route path='/fans-airflow' element={<FansAirflow />}></Route>
      </Routes>
    </div>
  );
}

export default App;