import React from 'react'
import { Vectors } from '../assets/assets'
import '../styles/settings.css'

const Settings = () => {
  return (
    <main id="settings">
        <section className='options' >
            <div className="option">
                <p className="option-name">
                    My Account
                </p>
                <Vectors.rightArrow/>
            </div>
        </section>
    </main>
  )
}

export default Settings