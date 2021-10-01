import React from 'react'
import './Quality.css'
import insurance from '../../../images/insurance.png'
import certificate from '../../../images/certificate.png'
import cod from '../../../images/cash-on-delivery.png'
import returnBox from '../../../images/return-box.png'
import truck from '../../../images/delivery-truck.png'

function Quality() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFFCF2" fill-opacity="1" d="M0,96L1440,256L1440,320L0,320Z"></path>
            </svg>
            <div className="quality-container">
                <div className="row">
                    <div className="qcard" style={{width:'200px'}}>
                        <img src={insurance} style={{width:'40px'}}/>
                        <span className="qtext">free transit insurance</span>
                    </div>
                    <div className="qcard" style={{width:'200px'}}>
                        <img src={certificate} style={{width:'40px'}}/>
                        <span className="qtext">certified jewellery</span>
                    </div>
                    <div className="qcard" style={{width:'200px'}}>
                        <img src={returnBox} style={{width:'40px'}}/>
                        <span className="qtext">7 days returns</span>
                    </div>
                </div>
                <div className="row" style={{marginTop:'100px'}}>
                    <div className="qcard" style={{width:'200px'}}>
                        <img src={truck} style={{width:'40px'}}/>
                        <span className="qtext">Free delivery</span>
                    </div>
                    <div className="qcard" style={{width:'200px'}}>
                        <img src={cod} style={{width:'40px'}}/>
                        <span className="qtext">COD available</span>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFCF2" fill-opacity="1" d="M0,96L1440,256L1440,0L0,0Z"></path></svg>
        </>
    )
}

export default Quality
