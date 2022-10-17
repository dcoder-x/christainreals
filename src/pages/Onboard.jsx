import React from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import '../styles/onboard.css'
import Dashevents from './Dashevents'
import Explore from './Explore'
import Messages from './Messages'
import PersonalChats from './PersonalChats'


const Onboard = () => {
    const navigate = useNavigate()
  return (
    <main id="onboard">
        <div className="tab">
            <div className="tab-btn" onClick={e=>{navigate('explore')}}>
                Explore
            </div>
            <div className="tab-btn" onClick={e=>{navigate('messages')}}>
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