import { Icon } from '@iconify/react'
import React from 'react'
import { useNavigate } from 'react-router'
import { Vectors } from '../assets/assets'
import { settings } from '../data/options'
import '../styles/settings.css'

const Settings = () => {
    const navigate = useNavigate()
  return (
    <main id="settings">
        <section className='options' >
            <h1 className='page-title'>
                Settings
            </h1>
            {
                settings.map((option,index)=>{
                    return(

                        <div className="option" onClick={e=>{option.link?navigate(option.link):null}}>
                            <p className="option-name">
                                {option.name}
                            </p>
                            <Icon icon="ic:round-keyboard-arrow-right" />
                        </div>
                    )
                })
            }
            <button className='logout'>
                Logout
            </button>

        </section>
    </main>
  )
}

export default Settings