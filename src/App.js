import React from 'react';
import Sitetotal from './componentes/site-total';

import Headerpromo from './componentes/header-promo';
import Headermid from './componentes/header-mid';
import Headernav from './componentes/header-nav';
import Headernavsub from './componentes/header-nav-sub';
import Containerpromo from './componentes/container-promo';

import "./global.css";


function App() {
  return (
      <>

        <Headerpromo />

        <Headermid />

        <Headernav />

        <Headernavsub />

        <Containerpromo />

        <Sitetotal />

      </>
  );
}

export default App;
