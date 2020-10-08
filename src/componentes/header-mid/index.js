import React from 'react';

import './header-mid.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




import 'bootstrap/dist/css/bootstrap.min.css';

import { ImSearch } from 'react-icons/im';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa';




const Headermid = () => (
    <>
        <header id="headermid">


            <spam class="segundo-menu">
                <Navbar bg="light" expand="lg" >                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">jaqueline de oliveir maciel</Nav.Link>
                            <Nav.Link href="#link">2</Nav.Link>
                            <Nav.Link href="#home">3</Nav.Link>
                            <Nav.Link href="#link">4</Nav.Link>
                            <Nav.Link href="#home">5</Nav.Link>
                            <Nav.Link href="#link">6</Nav.Link>
                            <Nav.Link href="#home">7</Nav.Link>
                            <Nav.Link href="#link">8</Nav.Link>
                            <Nav.Link href="#home">9</Nav.Link>
                            <Nav.Link href="#link">10</Nav.Link>

                            
                        </Nav>
                       
                    </Navbar.Collapse>
                </Navbar>


            </spam>





            <spam id="logo">



            </spam>

            <spam id="busca">

                <Form>
                    <Form.Group id="form-formatacao" controlId="formBasicEmail" >
                        <Form.Control type="email" placeholder="Busque aqui seu produto" />
                    </Form.Group>
                    <Button id="button-formatacao" variant="light" type="submit">
                        <  ImSearch size="10px" color="red" />
                    </Button>
                </Form>

            </spam>

            <spam id="cadastro">

                <div id="icon-user"> <FaRegUserCircle size="35px" /> </div>

                <div id="cadastro-user" > Olá, faça seu login </div>

            </spam>

            <spam id="icone">
                <div id="divisao-icon1"> <FaRegHeart size="35px" /> </div>
                <div id="divisao-icon2"> <FaShoppingBasket size="35px" /> </div>

            </spam>


        </header>



    </>
);

export default Headermid;