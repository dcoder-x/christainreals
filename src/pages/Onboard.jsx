import React from 'react'
import { Route, Routes, useLocation, useNavigate, useRoutes } from 'react-router'
import { useRoute } from '../components/hooks'
import '../styles/onboard.css'
import Dashevents from './DashEvents'
import Explore from './Explore'
import Messages from './Messages'
import PersonalChats from './PersonalChats'


const Onboard = () => {
    const navigate = useNavigate()
    const route = useRoute().route
  return (
    <main id="onboard">
        <div className="tab">
            <div 
                className={`tab-btn ${route=='explore'?'active':null}`} 
                onClick={e=>{navigate('explore')}}
            >
                Browse
            </div>
            <div 
                className={`tab-btn ${route=='messages'?'active':null}`} 
                onClick={e=>{navigate('messages')}}
            >
                Messages
            </div>
        </div>
        <div className="content">
            <Routes>
                <Route index path='/*' element={<Explore/>}/>
                <Route index path='messages' element={<Messages/>}/>
                <Route index path='personalChats' element={<PersonalChats/>}/>
            </Routes>
        </div>
    </main>
  )
}

export default Onboard