import React from 'react'

const Docviewer = (doclink) => {
  return (
    <main id="docview" style={{width:'100%'}}>
        <iframe className='docview' src={doclink} frameborder="0" style={{width:'100%'}}></iframe>
    </main>
  )
}

export default Docviewer