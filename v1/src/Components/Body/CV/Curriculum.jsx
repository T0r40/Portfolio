import React from "react";
import Button from "react-bootstrap/Button";
import {Col} from "react-bootstrap";
import {Row}  from "react-bootstrap";
import espanaIc from '../../../res/img/espana.png';
import franciaIc from '../../../res/img/francia.png';
import alemaniaIc from '../../../res/img/alemania.png';
import UKIc from '../../../res/img/reino-unido.png';
import emailjs from 'emailjs-com';
import './Curriculum.css';

const Curriculum = () => {
    const sendEmail = (language) => {
      const templateParams = {
        language: language,
        // Puedes agregar más parámetros según tu plantilla en EmailJS
      };
  
      emailjs.send('service_h089v14', 'template_z649ccj', templateParams, 'h1i0vzVuPuSlUbZXB')
        .then((response) => {
          console.log('Email successfully sent!', response.status, response.text);
        }, (error) => {
          console.log('Failed to send email:', error);
        });
    };
  
    return (
      <Row>
        <Col>
          <div align="center" className="curriculum-button-container">
            <Button onClick={() => sendEmail('Español')} 
                    href="https://drive.google.com/file/d/1qiBxP4RarDL-HQo_wn2LvLkmXzWM7XIf/view?usp=sharing"
                    target="_black"
                    variant="outline-dark">
              <img src={espanaIc} className="img-thumbnail" width={100} alt="Español" />
            </Button>
          </div>
          </Col>
          <Col>
          <div align="center" className="curriculum-button-container">
            <Button onClick={() => sendEmail('Inglés')} 
                    href="https://drive.google.com/file/d/1XRLHuAcMVLvglNwD75rhS904ISHPgkH-/view?usp=sharing"
                    variant="outline-dark"
                    target="_black">
              <img src={UKIc} className="img-thumbnail" width={100} alt="Español" />
            </Button>
          </div>
          </Col>
          <Col>
          <div align="center" className="curriculum-button-container">
            <Button onClick={() => sendEmail('Francés')} 
                   href="https://drive.google.com/file/d/1soLSSHl8yNvUQileucRUhx59PMBUxRF9/view?usp=sharing"
                   variant="outline-dark"
                   target="_black">
              <img src={franciaIc} className="img-thumbnail" width={100} alt="Español" />
            </Button>
          </div>
          </Col>
          <Col>
          <div align="center" className="curriculum-button-container">
            <Button onClick={() => sendEmail('Alemán')} 
                    href="https://drive.google.com/file/d/1_GT3b3L7pHVpb-eMytScUo4lyiUvUx8G/view?usp=sharing"
                    variant="outline-dark"
                    target="_black">
              <img src={alemaniaIc} className="img-thumbnail" width={100} alt="Español" />
            </Button>
          </div>
          </Col>
        </Row>
    );
  };
  
  export default Curriculum;

