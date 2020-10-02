import React from 'react';
import Headerpromo from '../header-promo';
import Headermid from '../header-mid';
import Headernav from '../header-nav';
import Headernavsub from '../header-nav-sub';
import Containerpromo from '../container-promo';
import Bannermid from '../banner-mid';

import Bannerrotativo from '../banner-rotativo';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import './sitetotal.css';

const Sitetotal = () => (
    <container id="sitetotal"> 
    
        <Headerpromo />

        <Headermid />

        <Headernav />

        <Headernavsub />

        <Containerpromo />

        <Bannerrotativo />

        <Carousel />

        <Bannermid />
    
    </container>

);

export default Sitetotal;