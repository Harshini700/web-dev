import React from 'react'
import {Route,Routes} from 'react-router-dom'
import ApplyJob from './pages/ApplyJob';
import Applications from './pages/Applications';
import Home from './pages/home';

const App=()=>{
  return(
    <div>
       <Routes>
         <Route path='/Home' element={<Home />} />
         <Route path='/apply-job/:id' element={<ApplyJob />} />
         <Route path='/applications' element={<Applications />} />
        
       </Routes>
    </div>
  )
}
export default App
