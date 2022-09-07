import React from 'react'

const HeroSection = ({bgImage,heroText}) => {
  return (
    <div id='heroSection' style={{background: `linear-gradient(0deg, rgba(220, 20, 23, 0.19), rgba(220, 20, 23, 0.19)), url(${bgImage})`,...styles.bgImage}}>
        <h1 style={{color:"white"}}>
            {heroText}
        </h1>
    </div>
  )
}
const styles = {
    bgImage:{
        width:'100%',
        backgroundSize:"cover !important",
        backgroundPosition:"center !important",
        height:"55vh"
    }
}

export default HeroSection