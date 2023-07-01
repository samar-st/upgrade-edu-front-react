import React from 'react';
import "../../components/course-modules/Courses.css";
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import looopImg from "../../images/looop.svg";
import interfaceImg from "../../images/Right Tilt Transparent 1.svg"
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const Courses = () => {


  return (
    <div  className='fully-bg-courses-content'>
    <Container>
        <Row className='common-content-row' xs="auto">
        <Col xs={12}>
                <CardGroup className='all-cards-content'>
                <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 1</Card.Title>
                    <Card.Text className='name-module-course'>Организационный модуль</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={looopImg} />
                    <Link to='/module1' className='open-module-course' >
                    Открыть модуль
                    </Link>
                </Card>
                <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 2</Card.Title>
                    <Card.Text className='name-module-course'>Основы дизайна интерфейсов</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={interfaceImg} />
                    <Link to='/module2'  className='open-module-course'>
                    Открыть модуль
                    </Link>
                </Card>
                <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 3</Card.Title>
                    <Card.Text className='name-module-course'>Изучение FIGMA</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={looopImg} />
                    <Link to='/module3'  className='open-module-course'>
                    Открыть модуль
                    </Link>
                </Card>
                <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 4</Card.Title>
                    <Card.Text className='name-module-course'>Практика в FIGMA</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={looopImg} />
                    <Link to='/module4'  className='open-module-course' >
                    Открыть модуль
                    </Link>
                </Card>
                </CardGroup>
            </Col>
            <Col xs={12}>
                <CardGroup className='all-cards-content'>
                <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 5</Card.Title>
                    <Card.Text className='name-module-course'>Изучение TILDA</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={interfaceImg} />
                    <Link to='/module5'  className='open-module-course'>
                    Открыть модуль
                    </Link>
                </Card>
                <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 6</Card.Title>
                    <Card.Text className='name-module-course'>Погружение в UX</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={interfaceImg} />
                    <Link to='/module6'  className='open-module-course'>
                    Открыть модуль
                    </Link>
                </Card>
                <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 7</Card.Title>
                    <Card.Text className='name-module-course'>UX-Инструменты</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={looopImg} />
                    <Link to='/module7'  className='open-module-course'>
                    Открыть модуль
                    </Link>
                </Card>
                <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 8</Card.Title>
                    <Card.Text className='name-module-course'>Создание и упаковка портфолио</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={interfaceImg} />
                    <Link to='/module8' className='open-module-course'>
                    Открыть модуль
                    </Link>
                </Card>
                </CardGroup>
            </Col>
        </Row>
    </Container>
    {/* when mobile version is active, be swiper JS */}
    <div className='swiper-mobile-vers'>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 1</Card.Title>
                    <Card.Text className='name-module-course'>Организационный модуль</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={looopImg} />
                    <Link to='/module1' className='open-module-course' >
                    Открыть модуль
                    </Link>
                </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 2</Card.Title>
                    <Card.Text className='name-module-course'>Основы дизайна интерфейсов</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={interfaceImg} />
                    <Link to='/module2'  className='open-module-course'>
                    Открыть модуль
                    </Link>
                </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 3</Card.Title>
                    <Card.Text className='name-module-course'>Изучение FIGMA</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={looopImg} />
                    <Link to='/module3'  className='open-module-course'>
                    Открыть модуль
                    </Link>
                </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 4</Card.Title>
                    <Card.Text className='name-module-course'>Практика в FIGMA</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={looopImg} />
                    <Link to='/module4'  className='open-module-course' >
                    Открыть модуль
                    </Link>
                </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 5</Card.Title>
                    <Card.Text className='name-module-course'>Изучение TILDA</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={interfaceImg} />
                    <Link to='/module5'  className='open-module-course'>
                    Открыть модуль
                    </Link>
                </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 6</Card.Title>
                    <Card.Text className='name-module-course'>Погружение в UX</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={interfaceImg} />
                    <Link to='/module6'  className='open-module-course'>
                    Открыть модуль
                    </Link>
                </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 7</Card.Title>
                    <Card.Text className='name-module-course'>UX-Инструменты</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={looopImg} />
                    <Link to='/module7'  className='open-module-course'>
                    Открыть модуль
                    </Link>
                </Card>
        </SwiperSlide>
        <SwiperSlide>
        <Card className='card-box-courses'>
                    <Card.Body>
                    <Card.Title className='module-number-count'>Модуль 8</Card.Title>
                    <Card.Text className='name-module-course'>Создание и упаковка портфолио</Card.Text>
                    </Card.Body>
                    <Card.Img className='loop-img-boxes' variant="top" src={interfaceImg} />
                    <Link to='/module8' className='open-module-course'>
                    Открыть модуль
                    </Link>
                </Card>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  )
}

export default Courses