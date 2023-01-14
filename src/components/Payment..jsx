import { Icon } from '@iconify/react'
import React from 'react'
import { useNavigate } from 'react-router'
import { Vectors } from '../assets/assets'
import { settings } from '../data/options'
import '../styles/payment.scss'

const Payments = () => {
    const navigate = useNavigate()
  return (
    <main id="settings">
        <section className='options' >
            <h1 className='page-title'>
                Payments
            </h1>
            <section className="subscription">

            </section>

        </section>
    </main>
  )
}

function PlanCard({title,price,onActivate,onCancel,buttonText,expiryDate,active}) {
    return(
        <>
        <div className="Subscription">
            <div className="header">
                <div className="title">
                    <p>
                        {title} 
                    </p>
                    <p className="expiry-date">
                        {expiryDate}
                    </p>
                </div>
                <p className="price">
                    {price}
                </p>
            </div>
            <div className="action-btn">
                {
                    active?
                    <button className='cancel' onClick={onCancel}>
                        {buttonText||'Cancel'}
                    </button>
                    :
                    <button className="activate" onClick={onActivate}>
                        Activate
                    </button>
                }
            </div>
        </div>
        </>
    )
}

export default Payments