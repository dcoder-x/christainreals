import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../styles/popUp.css'
import { Icon } from '@iconify/react';
import { useRef } from 'react'

const PopUp = ({style}) => {
    const [isLoaded, setisLoaded] = useState(false)
    const [passage, setpassage] = useState()
    const popUpRef = useRef()
    var topicOptions = ['love','marriage','kiss','beloved']
    const topic = topicOptions[Math.floor(Math.random()*topicOptions.length)]
    const random = Math.floor(Math.random()*10)
    const getPassage = async ()=>{
        try {
            const passage = await 
            axios.get(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/search?query=${topic}&sort=relevance`,{
            headers:{
                'api-key': '9cec2824e431929da2eedf1d17621b85'
            }
            })
            setisLoaded(true)
            
            setpassage(passage.data)
            
        } catch (error) {
            console.log(error)
        }

    }
    console.log(isLoaded,passage)
    useEffect( ()=>{
         getPassage()
    },[])
    if (passage) {
        return (
            <div className='popup' ref={popUpRef} >
                <div className="close" 
                style={{
                    cursor:"pointer"
                }}
                onClick={e=>{
                    popUpRef.current.style.display='none'
                }}>
                    &times;
                </div>
                <div >
                    <Icon icon="bxs:bible" className="icon" />
                </div>
                <div className="scripture">
                 <div className="reference">
                        {
                            passage.data.verses[random].reference
                        }
                        </div>
                        <div className="verse">
                        {
                            passage.data.verses[random].text
                        }
                        </div> 
                </div>     
       

            </div>
        ) 
    }

}

export default PopUp