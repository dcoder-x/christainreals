import React from 'react'
import { EventSwiper } from './Events'
import '../styles/meetups.css'
import { Icon } from '@iconify/react'

const MeetUp = () => {
  return (
    <main id="meetup">
    <h1>Events</h1>
    <div className="header">
      <div className="search">
        <div className="search-icon">
          <Icon icon="clarity:search-line" color="D9D9D9" />
        </div>
        <input type="search" name="search-events" id="" />
      </div>
      <div className="location">
        <select className="events-filter" name="" id="">
          <optgroup>
            <option value="florida">Florida</option>
            <option value="florida">Texas</option>
            <option value="florida">Pekkam</option>
          </optgroup>
        </select>
      </div>
      <div className="add-meetup">
        <div className="add-icon">
          <Icon icon="akar-icons:circle-plus-fill" color="D9D9D9"  />
        </div>
        <p>
          Organize a meet up
        </p>
      </div>
    </div>
    <EventSwiper eventgroup={"My events"} />
    <EventSwiper eventgroup={"Past events"} />
    <EventSwiper eventgroup={"Upcoming"} />
  </main>
  )
}

export default MeetUp