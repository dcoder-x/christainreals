import React from 'react'
import { EventSwiper } from './Events'
import '../styles/dashevents.css'
import { eventsData } from '../data/eventsData'

const DashEvents = () => {

  return (
    <main id="dashevents">
        <EventSwiper eventgroup={'My Scheduled events'} data={eventsData} isheader/> 
        <EventSwiper eventgroup={'All Upcoming events'} upcoming data={eventsData} isheader/> 
        <EventSwiper eventgroup={'All Past events'} past data={eventsData} isheader/> 
    </main>
  )
}

export default DashEvents