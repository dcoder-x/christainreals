import {useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import './App.css'

import Nav from './components/Nav'
import About from './pages/About'
import Events from './pages/Events'
import Help from './pages/Help'
import Home from './pages/Home'
import Legal from './pages/Legal'
import Services from './pages/Services'
import AOS from "aos";
import "aos/dist/aos.css";
import SignUp from './pages/SignUp'

function App() {
  return (
    <div className="App">
      <>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/legal' element={<Legal/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
      </>
    </div>
  )
}

export default App
