import React from 'react';

import Bannermid from '../banner-mid';

import Bannerrotativo from '../banner-rotativo';

import Carousel from 'react-bootstrap/Carousel';


import 'bootstrap/dist/css/bootstrap.min.css';

import './sitetotal.css';

const Sitetotal = () => (
    <container id="sitetotal">     
        

        <Bannerrotativo />

        <Carousel />

        <Bannermid />
    
    </container>

);

export default Sitetotal;