import React from 'react'
import { Container } from 'react-bootstrap'
import './Footer.css'
import ig from '../../images/ig.png'
import twitter from '../../images/twitter.png'
import fb from '../../images/fb.png'

function Footer() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFFCF2" fill-opacity="1" d="M0,96L1440,256L1440,320L0,320Z"></path>
            </svg>
            <div style={{background:'#FFFCF2',width:'100%',padding:'30px'}}>
                <span className="brand"><b>KARAT</b></span><br/><span className="brand">Value</span>
                <div className="footer">
                <div className="col">
                    
                    <div className="list">
                        <span>ADDRESS</span>
                        <span className="sub-list">
                            Shop No.3/36A, Maharaja<br/>Agrasen Marg, UV Block,<br/>Shalimar Bagh, Delhi,<br/>110088
                        </span>
                    </div>
                </div>
                <div className="col">
                    
                    <div className="list">
                        <span>SOCIALS</span>
                        <span className="sub-list">
                            <img src={fb} style={{width:'20px'}}/><br/><img src={twitter} style={{width:'20px'}}/><br/><img src={ig} style={{width:'20px'}}/>
                        </span>
                    </div>
                </div>
                <div className="col">
                    
                    <div className="list">
                        <span>COMPANY</span>
                        <span className="sub-list">
                            About us<br/>Contact us<br/>Privacy Policy<br/>Terms and Conditions
                        </span>
                    </div>
                </div>
                </div>
            </div>
            
        </>
    )
}

export default Footer
