import React from "react";
import Presentation from "./Presentation/Presentation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Tech from "./Technologies/Technology";
import Contact from './Contact/Contact';
import Curriculum from "./CV/Curriculum";
import './Body.css';
import SFunc from "./SAPFunctional/SAPFunctional";
import bodyBG from '../../res/img/bg.png';
import { useTranslation } from "react-i18next";

const Body = () => {
    const {t, i18n} = useTranslation('common');
    return (
        <div style={{ backgroundImage: `url(${bodyBG})` }}>
            {/* Esta Card siempre ocupará el ancho completo */}
            <Row className="mb-4">
                <Col>
                    <Card id="Acerca">
                        <Card.Header>
                            <Card.Title align="center">{t('Header.Acerca')}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Presentation/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
            {/* Estas Cards seguirán el patrón de agrupamiento */}
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card id="Tec">
                        <Card.Header>
                            <Card.Title align="center">{t('Header.Tecno')}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Tech/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card id="Func">
                        <Card.Header>
                            <Card.Title align="center">{t('Header.Funcional')}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <SFunc/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
            {/* Esta Card siempre ocupará el ancho completo */}
            <Row>
                <Col>
                    <Card id="Curriculum">
                        <Card.Header>
                            <Card.Title align="center">{t('Header.CV')}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Curriculum/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
            {/* Esta Card siempre ocupará el ancho completo */}
            <Row className="mb-4 form-container">
                <Col>
                        <Card id="Contacto">
                            <Card.Header className="card-header-title">
                                <Card.Title align="center">{t('Body.Formulario')}</Card.Title>
                            </Card.Header>
                            <Card.Body className="card-body">
                                <Card.Text>
                                    <Contact/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>        
        </div>
    );
}

export default Body;
