import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import sapIc from '../../../res/img/sap.png';
import reactIc from '../../../res/img/react.png';
import programingIc from '../../../res/img/lenguaje-de-codificacion.png';
import javaIc from '../../../res/img/java.png';
import javSIc from '../../../res/img/js.png';
import tsIc from '../../../res/img/ts.png';
import cIc from '../../../res/img/c.png';
import csIc from '../../../res/img/cs.png';
import dataIc from '../../../res/img/recopilacion-de-datos.png';
import webIc from '../../../res/img/diseno-grafico.png';
import docKbIc from '../../../res/img/docker-kb.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Technology.css';
import { useTranslation } from "react-i18next";

function Tech() {
  const {t, i18n} = useTranslation('common');
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
            <img src={sapIc} 
            className="img-thumbnail" width={50} alt="Responsive image"/>
        </Accordion.Header>
        <Accordion.Body>
        {/* SUBPARTES DE SAP */}
          <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>{t('Tecnologias.SAP.LenguajeABAP')}</Accordion.Header>
            <Accordion.Body>
              {t('Tecnologias.SAP.DescripcionABAP')}
              <br></br>
              <h5>{t('Tecnologias.SAP.CertificacionABAPTitulo')}</h5>
              <br></br>
              <ListGroup>
                <ListGroup.Item action href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-008e72de-1c7d-448d-90c8-fd9b5cbf43fa.pdf" target='_blank'>
                  Learn SAP ABAP Programming with Data migration, Cross application, OData service, ALE IDocs ,EDI Idoc & CDS Views
                </ListGroup.Item>
                <ListGroup.Item action href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-968d826a-4927-4963-92ac-7210fbcce5c7.pdf" target='_blank'>
                  SAP ABAP New Language Features - Learn ABAP 7.4 & 7.5 syntax
                </ListGroup.Item>
                <ListGroup.Item action href='https://udemy-certificate.s3.amazonaws.com/pdf/UC-802c59c4-ce7f-4158-acc7-6deb7aab237b.pdf' target='_blank'>
                  Learn SAP ABAP Objects - Online Training Course
                </ListGroup.Item>
                <ListGroup.Item action href='https://udemy-certificate.s3.amazonaws.com/pdf/UC-e6cdd6c0-8df1-4f28-a26b-c39c4b658c54.pdf' target='_blank'>
                  SAP S/4HANA - Learn ABAP Programming model for SAP S/4 HANA
                </ListGroup.Item>
                <ListGroup.Item action href='https://udemy-certificate.s3.amazonaws.com/pdf/UC-0c3fa166-f368-4093-ac18-48fee288fd30.pdf' target='_blank'>
                  Curso ABAP español
                </ListGroup.Item>
                <ListGroup.Item action href='https://udemy-certificate.s3.amazonaws.com/pdf/UC-cd1f042a-8742-42f7-b277-4ac6554ef581.pdf' target='_blank'>
                  Learn to debug code in SAP S/4 HANA
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>SAP UI5 & Fiori</Accordion.Header>
            <Accordion.Body>
            {t('Tecnologias.SAP.DescripcionUI5')}
            <br></br>
              <br></br>
              <br></br>
              <h5>{t('Tecnologias.SAP.CertificacionUI5Titulo')}</h5>
              <br></br>
              <ListGroup>
                <ListGroup.Item action href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-49b16fe0-676d-4c45-968e-e9349b1fe27a.pdf" target='_blank'>
                SAPUI5( UI5 / FIORI ) In-depth App dev'ment Boot camp[2022]
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
          <Accordion.Header>Smartforms & Adoveforms</Accordion.Header>
            <Accordion.Body>
             {t('Tecnologias.SAP.DescripcionSMAF')}
              <br></br>
              <br></br>
              <h5>{t('Tecnologias.SAP.CertificacionSMAFTitulo')}</h5>
              <br></br>
              <ListGroup>
                <ListGroup.Item action href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-140f903a-a3f1-4800-bb80-ea22da7c878c.pdf" target='_blank'>
                  Curso Smartforms completo 
                </ListGroup.Item>
                <ListGroup.Item action href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-008e72de-1c7d-448d-90c8-fd9b5cbf43fa.pdf" target='_blank'>
                Learn SAP ABAP Programming with Data migration, Cross application, OData service, ALE IDocs ,EDI Idoc & CDS Views
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
          <Accordion.Header>SAP Workflow</Accordion.Header>
            <Accordion.Body>
            {t('Tecnologias.SAP.DescripcionWORK')}
              <br></br>
              <br></br>
              <h5>{t('Tecnologias.SAP.CertificacionWORKTitulo')}</h5>
              <br></br>
              <ListGroup>
                <ListGroup.Item action href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-47908dbd-851e-422a-b90f-0607782b9202.pdf" target='_blank'>
                  Curso SAP Workflow completo español 
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>ODATA Services</Accordion.Header>
            <Accordion.Body>
            {t('Tecnologias.SAP.DescripcionODATA')}
              <br></br>
              <h5>{t('Tecnologias.SAP.CertificacionABAPTitulo')}</h5>
              <br></br>
              <ListGroup>
                <ListGroup.Item action href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-008e72de-1c7d-448d-90c8-fd9b5cbf43fa.pdf" target='_blank'>
                  Learn SAP ABAP Programming with Data migration, Cross application, OData service, ALE IDocs ,EDI Idoc & CDS Views
                </ListGroup.Item>
                <ListGroup.Item action href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-968d826a-4927-4963-92ac-7210fbcce5c7.pdf" target='_blank'>
                  Learn SAP OData Services Developments in 2 Hours
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
            <img src={reactIc} 
            className="img-thumbnail" width={80} alt="Responsive image"/>
        </Accordion.Header>
        <Accordion.Body>
         {t('Tecnologias.React.DescripcionReact')}
              <br></br>
              <br></br>
              <h5>{t('Tecnologias.SAP.CertificacionSMAFTitulo')}</h5>
              <br></br>
              <ListGroup>
                <ListGroup.Item action href="https://openwebinars.net/cert/m0bKX" target='_blank'>
                  Code splitting en SPA con React
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/m0bKX" target='_blank'>
                  Curso de React avanzado
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/EDlym" target='_blank'>
                  Curso de manejo de estado con Clases y Hooks en React
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/PDAnX" target='_blank'>
                  Organízate con React
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/eDqBA" target='_blank'>
                  React Hooks
                </ListGroup.Item>
              </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>
            <img src={dataIc} 
            className="img-thumbnail" width={50} alt="Responsive image"/>
            {t('Tecnologias.DB.TituloBD')}
        </Accordion.Header>
        <Accordion.Body>
            {t('Tecnologias.DB.DescripcionBD')}
              <br></br>
              <br></br>
              <h5>{t('Tecnologias.SAP.CertificacionSMAFTitulo')}</h5>
              <br></br>
              <ListGroup>
                <ListGroup.Item action href="https://openwebinars.net/cert/b21QQ" target='_blank'>
                  Curso de SQL desde Cero
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/12l7P" target='_blank'>
                  Curso de creación y administración de Bases de Datos SQL
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/2Kl7d" target='_blank'>
                  Curso de PostgreSQL: Instalación, configuración y optimización
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/jaMnl" target='_blank'>
                  Curso de Cassandra
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/PDGXq" target='_blank'>
                  Curso de MongoDB: Creación y gestión de bases de datos NoSQL
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/12l7P" target='_blank'>
                  Curso de creación y administración de Bases de Datos SQL
                </ListGroup.Item>
              </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>
            <img src={webIc} 
            className="img-thumbnail" width={50} alt="Responsive image"/>
            {t('Tecnologias.DW.TituloDW')} 
        </Accordion.Header>
        <Accordion.Body>        
            {t('Tecnologias.DW.DescripcionDW')} 
              <br></br>
              <br></br>
              <h5>{t('Tecnologias.SAP.CertificacionSMAFTitulo')}</h5>
              <br></br>
              <ListGroup>
                <ListGroup.Item action href="https://openwebinars.net/cert/JDZ45" target='_blank'>
                  Bootstrap 4: Componentes
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/1m6L1" target='_blank'>
                  Carrera Maquetador Web Profesional
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/9NMNd" target='_blank'>
                  Curso de Sass
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/3NBqm" target='_blank'>
                  Curso de jQuery
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/qwGGp" target='_blank'>
                  Bootstrap 4: Maquetación Responsive y Layout
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/5N47Q" target='_blank'>
                  Curso de Flexbox y CSS Grid
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/GDLXq" target='_blank'>
                  Curso de Responsive Web Design
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/Y6b2L" target='_blank'>
                  Curso de maquetación web con CSS
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/9ZnOP" target='_blank'>
                  Curso de HTML5 y CSS3
                </ListGroup.Item>
              </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>
            <img src={docKbIc} 
            className="img-thumbnail" width={80} alt="Responsive image"/>
            Kubernetes & Docker
        </Accordion.Header>
        <Accordion.Body>        
        {t('Tecnologias.KB.DescripcionKB')} 
              <br></br>
              <br></br>
              <h5>{t('Tecnologias.SAP.CertificacionSMAFTitulo')}</h5>
              <br></br>
              <ListGroup>
                <ListGroup.Item action href="https://openwebinars.net/cert/6L0Jr" target='_blank'>
                  Carrera Desarrollador con Kubernetes
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/720qr" target='_blank'>
                  Carrera Especialista en despliegues con Docker
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/9NY1g" target='_blank'>
                  Curso de Docker para Desarrolladores
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/RNOl9" target='_blank'>
                  Curso de Introducción a Docker
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/PD32q" target='_blank'>
                  Curso de Kubernetes para desarrolladores
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/p9e7E" target='_blank'>
                  Curso de entorno de Oracle sobre Docker
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/m0knn" target='_blank'>
                  Curso de pruebas automatizadas en una Web con Docker
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/z0dlk" target='_blank'>
                  Desarrollo rápido con docker-compose y docker Swarm
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/Y6zDB" target='_blank'>
                  KinD: Kubernetes en Docker
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/WqpyP" target='_blank'>
                  Knative: Uso de serverless en Kubernetes
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/qw48E" target='_blank'>
                  Kubernetes para principiantes
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/KD7Q6" target='_blank'>
                  Kubernetes: Creación de contenedores y despliegue de aplicaciones
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/ANlr7" target='_blank'>
                  Kubernetes: Modelo de persistencia y pods
                </ListGroup.Item>
              </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>
            <img src={programingIc} 
            className="img-thumbnail" width={50} alt="Responsive image"/>
            {t('Tecnologias.Lenguajes.TituloLenguajes')} 
        </Accordion.Header>
        <Accordion.Body>
          {t('Tecnologias.Lenguajes.DescripcionLenguajes')} 
          <br></br>
          <br></br>
          <Tabs id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="java" title={<span><img src={javaIc} alt="Java" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} /> Java</span>}>
              <ListGroup>
                <ListGroup.Item action href="https://openwebinars.net/cert/MLwk4" target='_blank'>
                  Java 8 para programadores Java
                </ListGroup.Item>
              </ListGroup>
              </Tab>
              <Tab eventKey="js" title={<span><img src={javSIc} alt="JS" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} /> JavaScript</span>}>
              <ListGroup>
                <ListGroup.Item action href="https://openwebinars.net/cert/nLDjR" target='_blank'>
                  Programador JavaScript Profesional
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/dyYjg" target='_blank'>
                  Curso de JavaScript Profesional
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/2KlEd" target='_blank'>
                  JavaScript Prototypes
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/w0pKm" target='_blank'>
                  JavaScript con principios SOLID
                </ListGroup.Item>
                <ListGroup.Item action href="https://openwebinars.net/cert/w0peg" target='_blank'>
                  Programación asíncrona con promises en JavaScript
                </ListGroup.Item>
              </ListGroup>
              </Tab>
              <Tab eventKey="ts" title={<span><img src={tsIc} alt="TS" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} /> TypeScript</span>}>
              <ListGroup>
                <ListGroup.Item action href="https://openwebinars.net/cert/kneNW" target='_blank'>
                  Curso de TypeScript
                </ListGroup.Item>
              </ListGroup>
              </Tab>
              <Tab eventKey="c++" title={<span><img src={cIc} alt="C++" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} /> C++</span>} disabled/>
              <Tab eventKey="c#" title={<span><img src={csIc} alt="C#" style={{ width: '20px', height: '20px', verticalAlign: 'middle' }} /> C#</span>} disabled/>
          </Tabs>
          <br></br>
          <br></br>
          <b>{t('Tecnologias.Lenguajes.Mensaje')}</b> 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Tech;