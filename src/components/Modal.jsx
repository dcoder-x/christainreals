import React from 'react'
import '../styles/modal.css'

const Modal = ({show,onclose,message,actionText, title,onAccept,Comp})=>{
    return(
        <main id="modal" style={{display:show==true?'flex':'none'}}>
            <section className='modal-holder'>
                <div className="modal-section">
                    <p className="title">
                        {title}
                    </p>
                    <p className="desc">
                        {
                            message
                        }
                    </p>
                    {
                        Comp?Comp:null
                    }
                    <div className="buttons">

                        <button onClick={onAccept}>
                            {actionText}
                        </button>
                        <button className='cancel' onClick={onclose}>
                            Cancel
                        </button>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Modal