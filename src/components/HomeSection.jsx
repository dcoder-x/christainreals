import React from 'react'
import '../styles/homesections.css'

const HomeSection = ({sectionImg,sectionTitle,sectionBg,sectionText,i}) => {
  return (
    <div  id='homeSections' 
        style={{
            background: sectionBg?`linear-gradient(0deg, rgba(2, 0, 0, 0.76), rgba(2, 0, 0, 0.76)), url(${sectionBg})`:null,
            flexDirection:!sectionBg?'row-reverse':'row',
            color:!sectionBg?'black':'white',
            padding:!sectionBg?'5rem 0':'4rem 0',
        }}
    >
        <div className="section-text">
            <h2 className="section-title">
                {sectionTitle}
            </h2>
            <p >
                {sectionText}
            </p>
        </div>
        <img  src={sectionImg} alt="" className="section-img" />
    </div>
  )
}

export default HomeSection