import React from 'react';
import './header-nav-sub.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import DropdownToggle from 'react-bootstrap/DropdownToggle';
import 'bootstrap/dist/css/bootstrap.min.css';



const Headernavsub = () => (
    <header id="headernavsub">
        <span id="cor1" class="menu-sub">
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                Compre por departamento
                    
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Brinquedo</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Eletronicos</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Moveis</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
        </span>


        <span id="cor2" class="menu-sub">Mercado</span>
        <span id="cor3" class="menu-sub">Brinquedo</span>
        <span id="cor4" class="menu-sub">Playstation 5</span>
        <span id="cor5" class="menu-sub">Celulares</span>
        <span id="cor6" class="menu-sub">Ar condicionado</span>
        <span id="cor7" class="menu-sub">Eletroportateis</span>
        <span id="cor8" class="menu-sub">Moveis</span>




    </header>
);

export default Headernavsub;