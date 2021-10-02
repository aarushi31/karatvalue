import React from 'react'
import './Product.css'
import {Container, Form,Select} from 'react-bootstrap'
import Footer2 from '../Footer/Footer2'
import cross from '../../images/cross.svg'
import coin from '../../images/coin.png'
import bag from '../../images/Vector.png'
import heart from '../../images/Vector2.png'
import { useHistory } from 'react-router'

function Product() {

    const history=useHistory();
    const productDetail=()=>{
        history.push('/productDetails')
    }
    return (
        <>
            <div className="Product-container">
                <div className="filter">
                    <div className="filter-heading">
                        <span>Filters</span>
                        <hr className="fline"/>
                    </div>
                    <select name="Price" id="price">
                        <option value="Price">Price</option>
                    </select>
                    <select name="Weight" id="weight">
                        <option value="Weight">Weight</option>
                    </select>
                </div>
                <div className="applied-filters">
                    <span className="applied">Price: Low to high <span className="cross"><img src={cross}/></span></span>
                    <span className="applied">Price: Low to high <span className="cross"><img src={cross}/></span></span>
                </div>
                <Container className="card-container">
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
                </Container>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFCF2" fill-opacity="1" d="M0,96L1440,256L1440,0L0,0Z"></path></svg>
            <Footer2/>
        </>
    )
}

export default Product
