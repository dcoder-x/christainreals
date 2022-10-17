import React from 'react'
import { EventSwiper } from './Events'
import '../styles/dashevents.css'

const DashEvents = () => {

  return (
    <main id="dashevents">
        <EventSwiper eventgroup={'My events'} isheader/> 
        <EventSwiper eventgroup={'Past events'} isheader/> 
        <EventSwiper eventgroup={'Upcoming'} isheader/> 
    </main>
  )
}

export default DashEvents