import React from 'react';

import './banner-mid.css';

import Bannerpromosup1 from '../../assets/banner-promo-sup1.jpg'
import Bannerpromosup2 from '../../assets/banner-promo-sup2.jpg'
import Bannerpromosup3 from '../../assets/banner-promo-sup3.jpg'

import Bannerpromoinf1 from '../../assets/banner-promo-inf1.jpg'
import Bannerpromoinf2 from '../../assets/banner-promo-inf2.jpg'


const Bannermid = () => (
    <main id="promo-mid"  >

        <div id="superior">

            <div id="cor12" class="banner-promo">
                <img src={ Bannerpromosup1 } alt=""/>
            </div>
            <div id="cor13" class="banner-promo">
                <img src={ Bannerpromosup2 } alt=""/>
            </div>
            <div id="cor14" class="banner-promo">
                <img src={ Bannerpromosup3 } alt=""/>
            </div>

        </div>

        <div id="inferior" >
            <div id="cor15" class="banner-promo-inferior">
            <img src={ Bannerpromoinf1 } alt=""/>
            </div>
            <div id="cor16" class="banner-promo-inferior">
            <img src={ Bannerpromoinf2 } alt=""/>
            </div>


        </div>





    </main>
);

export default Bannermid;
