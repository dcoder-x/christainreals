import { Icon } from '@iconify/react'
import React from 'react'
import { images, testimonials } from '../assets/assets'
import '../styles/explore.css'

const Explore = () => {
  return (
    <main id="explore">
        <section className="users">
            <div className="user">
                <div className="image">
                    {/* <img src={testimonials.catherine} alt="" /> */}
                </div>
                <div className="info">
                    <p className="name">
                        Ayomikun Faluyi
                    </p>
                    <p className="address">
                        Budapest, Hungary
                    </p>
                    <p className="age">
                        29 years
                    </p>
                    <p className="likes">
                        100+
                    </p>
                    <div className="btns">
                        <div className="like-btn">
                            <Icon color='white' icon="ant-design:heart-filled" />
                        </div>
                        <div className="message-btn">
                            message
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
  )
}

export default Explore