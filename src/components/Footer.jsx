import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../assets/assets'
import { menuData, socials } from '../data/menuData'
import '../styles/footer.css'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <footer id="footer">
        <section>
            <div className="logo">
                <img src={images.Logo} alt="" />
                <p className="motto">
                The Christian Dating Network
                </p>
            </div>
            <p className="copyright">
                © 2022 Christian Reals All rights reserved
            </p>
            <div className="socials">
                {
                    socials.map((social,i)=>{
                        return(
                            <a href={social.link}>
                                <Icon style={{marginRight:'1rem'}} color='white' icon={social.icon} width={25}/>

                            </a>
                        )
                    })
                }
            </div>
        </section>
        <section className="footer-links">
            {
                menuData.map((link)=>{
                    return(
                        <Link to={link.link}>
                            {link.name}
                        </Link>
                    )
                })
            }
        </section>
    </footer>
  )
}

export default Footer