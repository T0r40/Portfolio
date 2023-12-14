import './Presentation.css';
import { Carousel, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect, useRef} from 'react';
import img1 from '../../../res/img/imagen1.png';
import img2 from '../../../res/img/imagen2.png';
import img3 from '../../../res/img/imagen3.png';
import img4 from '../../../res/img/imagen4.png';
import img5 from '../../../res/img/imagen5.png';
import Text1 from './PresentationText/PresentationImg1';
import Text5 from './PresentationText/PresentationImg5';
import Text2 from './PresentationText/PresentationImg2';
import Text3 from './PresentationText/PresentationImg3';
import Text4 from './PresentationText/PresentationImg4';

function Presentation() {
  const [index, setIndex] = useState(0);
  let contenido;
  const intervalDuration = 90000;
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  switch (index) {
    case 0:
      contenido = <Text1/>;
      break;
    case 1:
      contenido = <Text2/>;
      break;
    case 2:
      contenido = <Text3/>;
      break;
    case 3:
      contenido = <Text4/>;
      break;
    case 4:
      contenido = <Text5/>;
    break;    
    default:
      contenido = <p>El número no coincide con ninguna opción.</p>;
  }

  return (
    <Row>
      <Col md={8}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item interval={intervalDuration}>
            <img className="d-block w-100 carousel-image" src={img1} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item interval={intervalDuration}>
            <img className="d-block w-100 carousel-image" src={img4} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item interval={intervalDuration}>
            <img className="d-block w-100 carousel-image" src={img3} alt="Third slide"/>
          </Carousel.Item>
          <Carousel.Item interval={intervalDuration}>
            <img className="d-block w-100 carousel-image" src={img2} alt="Fourth slide"/>
          </Carousel.Item>
          <Carousel.Item interval={intervalDuration}>
            <img className="d-block w-100 carousel-image" src={img5} alt="Fith slide"/>
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col md={4} className="carousel-text-box">
        {contenido} 
      </Col>
    </Row>
  );
};
export default Presentation;