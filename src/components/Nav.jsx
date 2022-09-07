import React, { useRef, useState } from 'react'
import { Link} from 'react-router-dom'
import { images } from '../assets/assets'
import { menuData } from '../data/menuData'
import { Icon } from '@iconify/react'
import '../styles/nav.css'

const Nav = () => {
  const sublinkref = useRef(null)
  const [isOpen, setisOpen] = useState(false)
  

  return (
        <nav id='nav'>
            <img src={images.Logo} alt="" className="logo" />
            <div className="menu-container">
                {
                  menuData.map((menu,i)=>{
                    return(
                      <div className="nav-links">
                        <div style={{display:'flex',alignItems:"center"}}>
                          <Link to={menu.link}  >
                            <p className='.nav-link'>
                              {
                                menu.name
                              }
                            </p>
                          </Link>

                            {
                              menu.sublinks? <Icon icon="ri:arrow-drop-down-line" onClick={  e=>{setisOpen(!isOpen); console.log(isOpen)}} width={30}  />:null
                            }
                        </div>
                       
                        {
                        menu.sublinks? 
                        <div ref={sublinkref} className="sublinks" style={{height:isOpen?'auto':0}}>
                          {
                            menu.sublinks.map((sublink)=>{
                              return(
                                <Link to={sublink.link}>

                                
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
              <button className='login-btn'>
                Login/Sign Up
              </button>
            </div>
          
        </nav>
  )
}

export default Nav