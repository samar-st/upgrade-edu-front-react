import React from 'react';
import "../../components/main-section/Main.css";
import bannerImg from "../../images/phone-computer.svg";
import progressImg from "../../images/progressofElement.svg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Main = () => {
  return (
   <div className='main-section-content'>
    <Container>
      <Row>
      <Col xs={12} md={8}>
      <div className='banner-section'>
        <div className='text-content-side'>
            <span className='online-course'>Онлайн-курс</span>
            <h1 className='title-of-course'>Дизайн сайтов и <br/> мобильных приложений</h1>
        </div>
        <div className='image-content-side'>
            <img src={bannerImg} alt='Banner image' />
        </div>
      </div>
        </Col>
        <Col xs={12} md={4}>
        <div className='element-progress-percent'>
        <img src={progressImg} alt='Banner image'/>
      </div>
        </Col>
      </Row>
    </Container>
   </div>
  )
}

export default Main