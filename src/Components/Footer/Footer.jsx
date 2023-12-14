import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import footerBG from '../../res/img/footer.png';
import './Footer.css';
import { useTranslation } from "react-i18next";
const Footer = () => {
  const {t, i18n} = useTranslation('common');
  return (
    <footer className="bg-dark text-light py-4 footer" style={{ backgroundImage: `url(${footerBG})` }}>
        <Container>
        <Row>
            <Col md={6}>
            <div className="footer-box">
                <h5>{t('Footer.Contacto')}</h5>
                <p>{t('Footer.Nombre')}</p>
                <p>{t('Footer.Email')}</p>
                <p>{t('Footer.Telefono')}</p>
            </div>
            </Col>
            <Col md={6}>
            <div className="footer-box">
                <h5>{t('Footer.Redes')}</h5>
                <p>
                <a href="https://www.linkedin.com/in/norlivaalonso/" className="text-light footer-hover social-link" target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </a>
                </p>
                <p>
                <a href="https://www.youtube.com/channel/UCBG2cmsuYOvucqc21biAIGQ" className="text-light footer-hover social-link" target='_blank'>
                    <FontAwesomeIcon icon={faYoutube} /> Youtube
                </a>
                </p>
                <p>
                <a href="https://github.com/T0r40" className="text-light footer-hover social-link" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
                </p>
            </div>
            </Col>
        </Row>
        </Container>
  </footer>
  );
}

export default Footer;
