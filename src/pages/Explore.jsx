import { Icon } from '@iconify/react'
import React from 'react'
import { images, testimonials } from '../assets/assets'
import { profileData } from '../data/explore'
import '../styles/explore.css'

const Explore = () => {
  return (
    <main id="explore">
        <section className="users">
            {
                profileData.map(user=>{
                    return(
                        <div className="user">
                            <div className="image">
                                {/* <img src={testimonials.catherine} alt="" /> */}
                            </div>
                            <div className="info">
                                <p className="name">
                                    {user.name}
                                </p>
                                <p className="address">
                                {user.address}
                                </p>
                                <p className="age">
                                    {user.age} years
                                </p>
                                <p className="likes">
                                    {user.likes}+
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
                    )
                  
                })
            }

        </section>
    </main>
  )
}

export default Explore