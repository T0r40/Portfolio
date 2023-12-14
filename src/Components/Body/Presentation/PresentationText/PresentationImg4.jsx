import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Button, Modal } from 'react-bootstrap';
import gbIC from '../../../../res/img/reino-unido.png';
import espIC from '../../../../res/img/espana.png';
import frIC from '../../../../res/img/francia.png';
import deIC from '../../../../res/img/alemania.png';
import './Text4.css';
import { useTranslation } from "react-i18next";

function Text4() {
    const {t, i18n} = useTranslation('common');
    const [languages, setLanguages] = useState([
        { name: t('Presentacion4.Presentacion4_1.nombre'), level: t('Presentacion4.Presentacion4_1.nivel'), flag: 'GB', link: 'https://drive.google.com/file/d/17ugLPlS5rN0f3M9SgKIJrhTfVtD0nP-I/view'},
        { name: t('Presentacion4.Presentacion4_2.nombre'), level: t('Presentacion4.Presentacion4_2.nivel'), flag: 'ES' },
        { name: t('Presentacion4.Presentacion4_3.nombre'), level: t('Presentacion4.Presentacion4_3.nivel'), flag: 'FR', link: 'https://drive.google.com/file/d/1cd9Q6mQcMlqIgG1ttCFanCWMpaIyL8aE/view?usp=sharing'},
        { name: t('Presentacion4.Presentacion4_4.nombre'), level: t('Presentacion4.Presentacion4_4.nivel'), flag: 'DE', link: 'https://drive.google.com/file/d/1W1zEyGXF0cl_BK5CwwKJm8GSYqrqsvfO/view' },
      ]);
      const [showModal, setShowModal] = useState(false);
      const [selectedLanguage, setSelectedLanguage] = useState(null);
    
      const handleShowModal = (language) => {
        setSelectedLanguage(language);
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };

      // Esta función actualiza el estado 'languages' con los valores traducidos
    const updateLanguages = () => {
      setLanguages([
          { name: t('Presentacion4.Presentacion4_1.nombre'), level: t('Presentacion4.Presentacion4_1.nivel'), flag: 'GB', link: 'https://drive.google.com/file/d/17ugLPlS5rN0f3M9SgKIJrhTfVtD0nP-I/view'},
          { name: t('Presentacion4.Presentacion4_2.nombre'), level: t('Presentacion4.Presentacion4_2.nivel'), flag: 'ES' },
          { name: t('Presentacion4.Presentacion4_3.nombre'), level: t('Presentacion4.Presentacion4_3.nivel'), flag: 'FR', link: 'https://drive.google.com/file/d/1cd9Q6mQcMlqIgG1ttCFanCWMpaIyL8aE/view?usp=sharing'},
          { name: t('Presentacion4.Presentacion4_4.nombre'), level: t('Presentacion4.Presentacion4_4.nivel'), flag: 'DE', link: 'https://drive.google.com/file/d/1W1zEyGXF0cl_BK5CwwKJm8GSYqrqsvfO/view' },
      ]);
  };

  useEffect(() => {
      updateLanguages();
  }, [i18n.language]); // Este efecto se ejecutará cada vez que cambie el idioma
    
      return (
        <div className="text-center mt-3">
        <p className="text4-info-text"><b>{t('Presentacion4.Aviso')}</b></p>
        <Card className="text4-card mx-auto mt-3 shadow-lg">
          <Card.Header className="text4-card-header text-center font-weight-bold">
            {t('Presentacion4.Titulo')}
          </Card.Header>
          <ListGroup variant="flush">
            {languages.map((language, index) => (
              <ListGroup.Item key={index} action onClick={() => handleShowModal(language)}
                className="text4-list-group-item d-flex justify-content-between align-items-center">
                <div>{language.name}</div>
                <div>{language.level}</div>
                <div>
                    {language.flag === 'GB' && <img className="text4-flag-icon" src={gbIC} alt="UK Flag" />}
                    {language.flag === 'ES' && <img className="text4-flag-icon" src={espIC} alt="Spain Flag" />}
                    {language.flag === 'FR' && <img className="text4-flag-icon" src={frIC} alt="France Flag" />}
                    {language.flag === 'DE' && <img className="text4-flag-icon" src={deIC} alt="Germany Flag" />}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
  
        <Modal show={showModal} onHide={handleCloseModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton className="bg-light">
            <Modal.Title>{t('Presentacion4.DetallesTitulo')}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedLanguage ? (
              <>
                <h4>{selectedLanguage.name} ({selectedLanguage.flag})</h4>
                <p>{selectedLanguage.level}</p>
                <p>
                  {selectedLanguage.link !== undefined ? <a href={selectedLanguage.link} target='_blank'>{t('Presentacion4.Enlace')}</a> : null}
                </p>
              </>
            ) : (
              <p>{t('Presentacion4.Mensaje')}</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              {t('Presentacion4.Cerrar')}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      );
    }

export default Text4;

