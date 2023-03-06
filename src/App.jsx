import {useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route, useLocation} from 'react-router-dom'
// import reactLogo from './assets/react.svg'
import './App.css'

import Nav from './components/Nav'
import About from './pages/About'
import Events from './pages/Events'
import Help from './pages/Help'
import Home from './pages/Home'
import Legal from './pages/Legal'
import Services from './pages/Services'
import Aos from "aos";
import "aos/dist/aos.css";
import SignUp from './pages/SignUp'
import Verify from './components/Verification'
import DashBoard from './pages/DashBoard'
import Faq from './pages/Faq'
import Signin from './pages/Signin'
import { ToastContainer } from 'react-toastify'
import ProfileCreation from './components/ProfileCreation'

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
    Aos.init()
  }, [pathname])
  
  return (
    <div className="App">
      <>
        <Nav/>
        <Routes>
        <Route path="*" element={<p>Page not found</p>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/legal' element={<Legal/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/verify' element={<Verify/>}/>
          <Route path='/profile' element={<ProfileCreation/>}/>
          <Route path='/dashboard/*' element={<DashBoard/>}>
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    </div>
  )
}

export default App
