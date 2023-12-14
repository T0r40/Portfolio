import Accordion from 'react-bootstrap/Accordion';
import sapIc from '../../../res/img/sap.png';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from "react-i18next";

function  SFunc() {
  const {t, i18n} = useTranslation('common');
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
            <img src={sapIc} 
            className="img-thumbnail" width={50} alt="Responsive image"/> 
            SAP PMS
        </Accordion.Header>
        <Accordion.Body>
          {t('Funcional.DescripcionPMS')}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <img src={sapIc} 
            className="img-thumbnail" width={50} alt="Responsive image"/> 
            SAP FI
        </Accordion.Header>
        <Accordion.Body>
          {t('Funcional.DescripcionFI')} 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <img src={sapIc} 
            className="img-thumbnail" width={50} alt="Responsive image"/> 
            SAP MM
        </Accordion.Header>
        <Accordion.Body>
        {t('Funcional.DescripcionMM')}
          <br></br>
            <h5>{t('Funcional.Certificaciones')}</h5>
          <br></br>
          <ListGroup>
              <ListGroup.Item action href="https://openwebinars.net/cert/MwcI" target='_blank'>
                Curso SAP: Introducción al módulo MM
              </ListGroup.Item>
              <ListGroup.Item action href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-d86aed5e-da41-4ed0-affd-fd98c6186aba.pdf" target='_blank'>
                SAP MM Datos Maestros; Materiales, Servicios y Proveedores
              </ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <img src={sapIc} 
            className="img-thumbnail" width={50} alt="Responsive image"/> 
            SAP PP
        </Accordion.Header>
        <Accordion.Body>
          {t('Funcional.DescripcionPP')} 
          <br></br>
            <h5>{t('Funcional.Certificaciones')}</h5>
          <br></br>
          <ListGroup>
              <ListGroup.Item action href="https://openwebinars.net/cert/Uavk" target='_blank'>
                Curso SAP: Introducción al módulo PP
              </ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <img src={sapIc} 
            className="img-thumbnail" width={50} alt="Responsive image"/> 
            SAP QM
        </Accordion.Header>
        <Accordion.Body>
        {t('Funcional.DescripcionQM')}
          <br></br>
          <h5>{t('Funcional.Certificaciones')}</h5>
          <br></br>
          <ListGroup>
              <ListGroup.Item action href="https://openwebinars.net/cert/eSqv" target='_blank'>
              Curso SAP: Introducción al módulo QM
              </ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          <img src={sapIc} 
            className="img-thumbnail" width={50} alt="Responsive image"/> 
            SAP PI
        </Accordion.Header>
        <Accordion.Body>
          {t('Funcional.DescripcionPI')}
          <h5>{t('Funcional.Certificaciones')}</h5>
          <br></br>
          <ListGroup>
              <ListGroup.Item action href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-d8e02234-8da8-47d7-9fa0-7e0e5daee690.pdf" target='_blank'>
                SAP PI Completo en Español
              </ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default SFunc;