import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './Trending.css'
import coin from '../../../images/coin.png'
import bag from '../../../images/Vector.png'
import heart from '../../../images/Vector2.png'
import { useHistory } from 'react-router'

function Trending() {
    const history=useHistory();
    const productDetail=()=>{
        history.push('/productDetails')
    }
    return ( 
        <Container>
            <div className="big-text">
                <h2>Top</h2>
                <h2>Trending</h2>
            </div>
            <Container style={{marginTop:'60px'}} className="card-container">
    
                        <div className="card" style={{borderRadius:'40px'}} onClick={productDetail}>
                            <img src={coin}/>
                            <hr className="line"/>
                            <span style={{fontSize:'12px'}}>10 grams 99.9% purity</span>
                            <span style={{fontSize:'12px'}}>Goddess Laxmi Gold</span>
                            <span style={{fontSize:'12px'}}>Coin</span>
                            <span className="price1">50,800</span>
                            <span className="price2">51,100</span>
                            <hr className="line"/>
                            <div className="buy-options">
                                <span><img src={bag}/></span>
                                <div className="vertical-line"></div>
                                <span><img src={heart}/></span>
                            </div>
                        </div>
                    
                   
                    <div className="card" style={{borderRadius:'40px'}} onClick={productDetail}>
                            <img src={coin}/>
                            <hr className="line"/>
                            <span style={{fontSize:'16px'}}>10 grams 99.9% purity</span>
                            <span style={{fontSize:'16px'}}>Goddess Laxmi Gold</span>
                            <span style={{fontSize:'16px'}}>Coin</span>
                            <span className="price1">50,800</span>
                            <span className="price2">51,100</span>
                            <hr className="line"/>
                            <div className="buy-options">
                            <span><img src={bag}/></span>
                                <div className="vertical-line"></div>
                                <span><img src={heart}/></span>
                            </div>
                        </div>
                   <div className="card" style={{borderRadius:'40px'}} onClick={productDetail}>
                            <img src={coin}/>
                            <hr className="line"/>
                            <span style={{fontSize:'16px'}}>10 grams 99.9% purity</span>
                            <span style={{fontSize:'16px'}}>Goddess Laxmi Gold</span>
                            <span style={{fontSize:'16px'}}>Coin</span>
                            <span className="price1">50,800</span>
                            <span className="price2">51,100</span>
                            <hr className="line"/>
                            <div className="buy-options">
                            <span><img src={bag}/></span>
                                <div className="vertical-line"></div>
                                <span><img src={heart}/></span>
                            </div>
                        </div>
                    <div className="card" style={{borderRadius:'40px'}} onClick={productDetail}>
                            <img src={coin}/>
                            <hr className="line"/>
                            <span style={{fontSize:'16px'}}>10 grams 99.9% purity</span>
                            <span style={{fontSize:'16px'}}>Goddess Laxmi Gold</span>
                            <span style={{fontSize:'16px'}}>Coin</span>
                            <span className="price1">50,800</span>
                            <span className="price2">51,100</span>
                            <hr className="line"/>
                            <div className="buy-options">
                            <span><img src={bag}/></span>
                                <div className="vertical-line"></div>
                                <span><img src={heart}/></span>
                            </div>
                        </div>
                
            </Container>
            <div className="big-text" style={{marginLeft:'74vw'}}>
                <h2>View</h2>
                <h2>All Coins</h2>
            </div>
        </Container>
    )
}

export default Trending
