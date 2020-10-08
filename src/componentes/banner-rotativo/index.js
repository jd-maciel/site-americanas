import React from 'react';
import './banner-rotativo.css';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import Banner1 from '../../assets/banner1.jpg'
import Banner2 from '../../assets/banner2.jpg'
import Banner3 from '../../assets/banner3.jpg'



const Bannerrotativo = () => (
    <main id="bannerrotativo">

        <Carousel>
            <Carousel.Item>
                <img                     
                    src= { Banner1 }
                    alt=""
                />               
            </Carousel.Item>
            <Carousel.Item>
                <img                   
                    src= { Banner2 }
                    alt=""
                />
            </Carousel.Item>
            <Carousel.Item>
                <img                  
                    src= { Banner3 }
                    alt=""
                />
            </Carousel.Item>
        </Carousel>

    </main>
);

export default Bannerrotativo;