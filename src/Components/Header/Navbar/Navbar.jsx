import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import Languages from '../LanguageSelector/LanguageSelector';
import headerBG from '../../../res/img/header.png';
import { useTranslation } from "react-i18next";

const NavbarOr = () => {
  const {t, i18n} = useTranslation('common');
  return (    
    <Navbar collapseOnSelect expand="xl" bg="dark" variant="dark" fixed="top" style={{ backgroundImage: `url(${headerBG})` }} className="div-header">
        <Container>
            <Languages/>
            <Navbar.Brand>
                <img src="https://media.licdn.com/dms/image/D4D03AQHXvAzXdKxhyg/profile-displayphoto-shrink_200_200/0/1701724776477?e=1707955200&v=beta&t=Qn5Zz4krdKIU1U_5T9yvb5-uTmytflohBJx6DSC4ibw" 
                className="img-thumbnail" width={100} alt="Responsive image"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="text-light navbar-hover" href="#Curriculum">{t('Header.CV')}</Nav.Link>
                    <Nav.Link className="text-light navbar-hover" href="#Acerca">{t('Header.Acerca')}</Nav.Link>
                    <Nav.Link className="text-light navbar-hover" href="#Tec">{t('Header.Tecno')}</Nav.Link>
                    <Nav.Link className="text-light navbar-hover" href="#Func">{t('Header.Funcional')}</Nav.Link>
                    <Nav.Link className="text-light navbar-hover" href="#Contacto">{t('Header.Contacto')}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);
}

export default NavbarOr;