import React from 'react'
import { EventSwiper } from './Events'
import '../styles/dashevents.css'

const DashEvents = () => {

  return (
    <main id="dashevents">
        <EventSwiper eventgroup={'My Scheduled events'} isheader/> 
        <EventSwiper eventgroup={'Past events'} isheader/> 
        <EventSwiper eventgroup={'Upcoming events'} isheader/> 
    </main>
  )
}

export default DashEvents