import React from 'react'
import '../styles/pageHeader.css'

const PageHeader = ({headerImage, pageTitle}) => {
  return (
    <header id="header" style={{
        background: `linear-gradient(0deg, rgba(220, 20, 23, 0.16), rgba(220, 20, 23, 0.16)), url(${headerImage})`,    

        ...styles}}>
        <h1>
            {
                pageTitle
            }
        </h1>
    </header>
  )
}
const styles = {

    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color:"white",
    width:'100vw',
    height:"60vh"

}

export default PageHeader