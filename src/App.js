import Home from "./views/Home";

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/auto-v-photo' element={<Home />}></Route>
        <Route path='/faq' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/lighting' element={<Home />}></Route>
        <Route path='/soil-nutrients' element={<Home />}></Route>
        <Route path='/watering' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// AXIOS --> marijuanna apis opencannibusapi ---> https://api.otreeba.com/swagger/
