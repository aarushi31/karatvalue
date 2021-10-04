import React,{useState} from 'react'
import cover from '../images/cover.png'
import {Carousel} from 'react-bootstrap'
import './Cover.css'

function Cover() {

          
    return (
              <Carousel controls={false}>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src={cover}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <img
                    className="d-block w-100"
                    src={cover}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            );
          }
          
         


export default Cover
