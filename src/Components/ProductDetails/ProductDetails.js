import React, { useState } from 'react'
import Footer2 from '../Footer/Footer2'
import coin from '../../images/coin.png'
import r1 from '../../images/r1.png'
import r2 from '../../images/r2.png'
import r3 from '../../images/r3.png'
import { Container } from 'react-bootstrap'
import './ProductDetails.css'
import bag from '../../images/Vector.png'
import heart from '../../images/Vector2.png'

function ProductDetails() {
    const images=[r1,r2,r3];
    const [selected,setSelected]=useState(images[0]);

    return (
        <>
            <div className="productDetails-container" style={{background:'#FFFCF2'}}>
                <div className="detail-container">
                <div className="product-images">
                    <img src={selected} style={{width:'400px'}} className="selected"/>
                    <div className="small-images">
                        {/* <img src={r3} style={{width:'100px'}}/>
                        <img src={r2} style={{width:'100px'}}/>
                        <img src={r1} style={{width:'100px'}}/> */}
                        
                        {images.map((img,idx)=>{
                            return(
                                <img src={img} style={{width:'100px'}} key={idx} onClick={()=>setSelected(img)}/>
                            )
                        })}
                    </div>
                </div>
                <div className="details">
                    <span className="name">2 Grams 99.9% purity Goddess Laxmi Gold Coin</span>
                    <span className="stock">In stock</span>
                    <span className="price1">50,800</span>
                    <span className="price2">51,100</span>
                    <span className="detail">Details</span>
                    <span className="detail-para">Dui pellentesque pretium duis scelerisque velit diam. In vel dictum luctus eget. Fusce et nulla cursus integer. Cras ac iaculis dolor diam. Laoreet ullamcorper ridiculus sapien et tincidunt sed.</span>
                    <div className="characteristics">
                        <div className="char">
                            <span><b>Color</b></span>
                            <span>Yellow</span>
                        </div>
                        <div className="char">
                            <span><b>Color</b></span>
                            <span>Yellow</span>
                        </div>
                        <div className="char">
                            <span><b>Color</b></span>
                            <span>Yellow</span>
                        </div>
                    </div>
                    <div className="pincode-check">
                        <input placeholder="Enter pincode" type="text"/>
                        <span style={{color:'#EE9776',cursor:'pointer'}}>CHECK</span>
                    </div>
                   
                </div>
                
                </div>
                <div className="purchase-btn">
                    <button className="add">Add to cart</button>
                    <button className="buyNow">Buy now</button>
                </div>
                <div className="similar">
                    <span className="similar-heading" style={{marginLeft:'90px'}}>Similar products</span>
                    <Container className="card-container" style={{width:'90vw',marginTop:'30px'}}>
                    <div className="card" style={{borderRadius:'40px'}}>
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
                        <div className="card" style={{borderRadius:'40px'}}>
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
                        <div className="card" style={{borderRadius:'40px'}}>
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
                        <div className="card" style={{borderRadius:'40px'}}>
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
            </div>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFCF2" fill-opacity="1" d="M0,96L1440,256L1440,0L0,0Z"></path></svg>

            <Footer2/>
        </>
    )
}

export default ProductDetails
