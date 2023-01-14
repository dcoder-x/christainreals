import React, { useRef, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { images } from '../assets/assets'
import { navData } from '../data/navData'
import { Icon } from '@iconify/react'
import '../styles/nav.css'
import { Squash as Hamburger } from 'hamburger-react'

const Nav = () => {
  const sublinkref = useRef(null)
  const navigate = useNavigate()
  const [isOpen, setisOpen] = useState(false)
  const [clicked, setClicked] = useState()
  

  return (
        <nav id='nav'>
            <img src={images.Logo} alt="" className="logo" />
            <div className={`menu-container ${clicked?'show':'closed'}`}>
                {
                  navData.map((menu,i)=>{
                    return(
                      <div className="nav-links">
                        <div style={{display:'flex',alignItems:"center"}}>
                          <Link to={menu.link} onClick={e=>{setClicked(false)}}  >
                            <p className='nav-link'>
                              {
                                menu.name
                              }
                            </p>
                          </Link>

                            {
                              menu.sublinks? <Icon icon="ri:arrow-drop-down-line" onClick={  e=>{setisOpen(!isOpen)}} onMouseEnter={  e=>{setisOpen(!isOpen)}} width={30}  />:null
                            }
                        </div>
                       
                        {
                        menu.sublinks? 
                        <div ref={sublinkref} onMouseLeave={e=>{setisOpen(false)}} className="sublinks" style={{height:isOpen?'auto':0}}>
                          {
                            menu.sublinks.map((sublink)=>{
                              return(
                                <Link to={'/signin'}>

                                
                                <p >
                                  {sublink.name}
                                </p>
                                </Link>
                              )
                            })
                          }
                        </div>:
                          null
                        }

                      </div>
                    )
                  })
                }
              <Link to={'/signin'}>
                <button className='login-btn'>
                  Login/Sign Up
                </button>
              </Link>  

            </div>
        <div 
        className={`menuButtons`}
        >
          <Hamburger color='white' toggled={clicked} toggle={setClicked} />
        </div>
        
        </nav>
  )
}

export default Nav