import { Icon } from '@iconify/react'
import React from 'react'
import { useState } from 'react'
import { icons } from '../assets/assets'
import '../styles/personalchats.css'

const Call = ({show,onclose})=>{
    return(
        <main id="call" style={{display:show?'flex':'none'}}>
            <div className="call-holder">
                <div className="call-modal">
                    <div className="reciever">
                        <div className="image">
                            <img src="" alt="" />
                        </div>
                        <div className="name">
                            Ayomikun
                        </div>
                    </div>
                    <p className='call-status'>
                        Calling...
                    </p>
                    <div className="call-bar">
                        <div className="video">
                            <Icon icon="ic:round-video-call" color='#D9D9D9' />
                        </div>
                        <div className="speaker">
                            <Icon icon="fluent:speaker-2-48-filled" color='#D9D9D9' />
                        </div>
                        <div className="voice" onClick={onclose}>
                            <Icon icon="fluent:call-32-filled" color= '#DC1417'/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

const PersonalChats = () => {
    const [show, setshow] = useState(false)
  return (
    <main id="personalchats">
        <div className="header">
            <div className="back-btn">
                <Icon icon="ion:arrow-back" />
            </div>
            <div className="call" onClick={e=>{setshow(true)}}>
                <div className="video">
                    <Icon icon="ic:round-video-call" />
                </div>
                <div className="voice">
                    <Icon icon="fluent:call-16-regular" />
                </div>
            </div>
        </div>
        <div className="chat-body">
            <div className="reciever">
                <div className="image">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    Ayomikun Faluyi
                </div>
                <div className="location">
                    Omisanjana, Ado-Ekiti
                </div>
            </div>
            <div className="time">
                    10:50 Am
            </div>
            <div className="chats">
                <div className="chat sender">
                    Hey! i wanna catch a drink at La’ Papis, do you wanna come?
                </div>
                <div className="chat reciever">
                    Yeah sure, meet in 1o mins
                </div>
            </div>
            <div className="chat-input">
                <div className="files">
                    <img src={icons.AddFile} alt="" />
                </div>
                <input type='text' placeholder='type a message here ...' className="text" />
                <Icon icon="material-symbols:send-outline" width={30} />
            </div>

        </div>
        <Call show={show} onclose={e=>{setshow(false)}}/>
    </main>
  )
}

export default PersonalChats