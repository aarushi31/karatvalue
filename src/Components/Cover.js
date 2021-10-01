import React,{useState} from 'react'
import cover from '../images/cover.png'
import {Carousel} from 'react-bootstrap'

function Cover() {
    const [index, setIndex] = useState(0);
          
    const handleSelect = (selectedIndex, e) => {
       setIndex(selectedIndex);
    };
          
    return (
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={cover}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
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
