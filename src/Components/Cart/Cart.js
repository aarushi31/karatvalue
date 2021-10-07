import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Footer2 from '../Footer/Footer2'
import coin from '../../images/coin.png'
import './Cart.css'

function Cart() {
    const [quantity,setQuantity]=useState(1);

    const decrement=()=>{
        let temp=quantity-1;
        if(temp<0){
            setQuantity(0);
        }
        else{
            setQuantity(temp);
        }
    }
    const increment=()=>{
        setQuantity(quantity+1);
    }

    let price=50800;

    return (
        <>
            <div style={{width:'100%',background:'#FFFCF2'}}>
            <Container className="cart-container">
                <div className="header">
                    <span>Shopping cart</span>
                    <span><b>2 items</b></span>
                </div>
                <Container className="cart-products">
                    <Row>
                        <Col xs={5}><span className="table-heading">product details</span></Col>
                        <Col><span className="table-heading">Quantity</span></Col>
                        <Col><span className="table-heading">Price</span></Col>
                        <Col><span className="table-heading">total</span></Col>
                    </Row>
                    <Row>
                        <Col xs={5}>
                            <div className="product-deets">
                                <img src={coin} alt="coin"/>
                                <div className="deets-text">
                                    <span>2 Grams 99.9% purity Goddess<br/>Laxmi Gold Coin</span>
                                    <span className="remove">Remove</span>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="quantity">
                                <span style={{cursor:'pointer'}} onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span style={{cursor:'pointer'}} onClick={increment}>+</span>
                            </div>
                        </Col>
                        <Col><span className="price">50,800</span></Col>
                        <Col><span className="price">{price*quantity}</span></Col>
                    </Row>
                </Container>
            </Container>
            </div>
            <Container className="summary">
                <span className="summary-heading">Order summary</span>
                <div className="bill">
                    <div className="bill-row">
                        <span className="row-title">Total</span>
                        <span className="s-price">{price*quantity}</span>
                    </div>
                    <div className="bill-row">
                        <span className="row-title">Shipping</span>
                        <span className="s-price">90</span>
                    </div>
                    <div className="bill-row">
                        <span className="row-title">Sub total</span>
                        <span className="s-price">{(price*quantity)+90}</span>
                    </div>
                </div>
            </Container>
            <div className="sub-footer">
                <div className="form">
                    <textarea placeholder="Special instructions"/>
                    <div className="cart-buttons">
                        <button className="continue">Continue Shopping</button>
                        <button className="checkout">Checkout</button>
                    </div>
                </div>
                <span className="end-text">We hope you enjoyed<br/>shopping with us!</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFCF2" fill-opacity="1" d="M0,96L1440,256L1440,0L0,0Z"></path></svg>
            <Footer2/>
        </>
    ) 
}

export default Cart
