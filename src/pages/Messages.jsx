import React from 'react'
import { useNavigate } from 'react-router'
import { images } from '../assets/assets'
import '../styles/message.css'
const Messages = () => {
    const navigate = useNavigate()
  return (
    <main id="messages">
        <section className="messageholder">
            <div className="message" onClick={e=>{navigate('../personalChats')}} >
                <div className="message-content">
                    <div className="img">
                        <img src={images.videoPoster} alt="" />
                    </div>
                    <div className="message-body">
                        <div className="title">
                            Anderson
                        </div>
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Et consequuntur rerum, minus fugit eius velit cum.
                        </div>
                    </div>
                </div>
                <div className="time">
                    11:00 am
                </div>
            </div>
        </section>
    </main>
  )
}

export default Messages