import React from "react";
import "../../components/module-3/Module3.css";
import { Col, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';


const Module3 = () => {

  const element = <FontAwesomeIcon icon={faLock} style={{color: "#000000",}} />

  return (
    <div className="fully-bg-courses-content">
      <Header />
      <Container className="included-container">
        <Row>
          <Col xs="auto" className="name-module-courses">
            <ListGroup className="text-surrounding">
              <ListGroup.Item className="name-of-module-text">
                2. Изучение FIGMA
              </ListGroup.Item>
            </ListGroup>
          </Col>
          {/* 1 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 1</p>
              <h2 className="theme-of-lesson-course">📌 Установка и знакомство с Figma</h2>
            </div>
            <div className="2-element-block">
              <Link to="/lesson">
                <button className="open-lesson-button">Открыть урок</button>
              </Link>
              {/* <button className='open-lesson-button'>
              Открыть урок
              </button> */}
            </div>
          </Col>
          {/* 2 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 2</p>
              <h2 className="theme-of-lesson-course">
              📌 Изучаем основные инструменты
              </h2>
            </div>
            <div className="2-element-block">
              <Link to="/lesson">
                <button className="open-lesson-button">Открыть урок</button>
              </Link>
            </div>
          </Col>
          {/* 3 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 3</p>
              <h2 className="theme-of-lesson-course">📌 Создаем рекламный креатив для сторис</h2>
            </div>
            <div className="2-element-block">
              <Link to="/lesson">
                <button className="open-lesson-button">Открыть урок</button>
              </Link>
            </div>
          </Col>
          {/* 4 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 4</p>
              <h2 className="theme-of-lesson-course">📌 Что такое и Как работают Constraints</h2>
            </div>
            <div className="2-element-block">
              <Link to="/lesson">
                <button className="open-lesson-button">Открыть урок</button>
              </Link>
            </div>
          </Col>
          {/* 5 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 5</p>
              <h2 className="theme-of-lesson-course">
              📌 Cтили | Cоздаем стили
              </h2>
            </div>
            <div className="2-element-block">
              <Link to="/pay4open">
                <button className="open-lesson-button-not-active">{element} Открыть урок</button>
              </Link>
            </div>
          </Col>
          {/* 6 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 6</p>
              <h2 className="theme-of-lesson-course">
              📌 Что такое и Как работают "Auto-layouts"
              </h2>
            </div>
            <div className="2-element-block">
              <Link to="/pay4open">
                <button className="open-lesson-button-not-active">{element} Открыть урок</button>
              </Link>
            </div>
          </Col>
          {/* 7 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 7</p>
              <h2 className="theme-of-lesson-course">
              📌 Что такое и Как работают "Компоненты"
              </h2>
            </div>
            <div className="2-element-block">
              <Link to="/pay4open">
                <button className="open-lesson-button-not-active">{element} Открыть урок</button>
              </Link>
            </div>
          </Col>
          {/* 8 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 8</p>
              <h2 className="theme-of-lesson-course">
              📌 Что такое и Как работают "Variants"
              </h2>
            </div>
            <div className="2-element-block">
              <Link to="/pay4open">
                <button className="open-lesson-button-not-active">{element} Открыть урок</button>
              </Link>
            </div>
          </Col>
          {/* 9 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 9</p>
              <h2 className="theme-of-lesson-course">
              📌 Плагины в Figma
              </h2>
            </div>
            <div className="2-element-block">
              <Link to="/pay4open">
                <button className="open-lesson-button-not-active">{element} Открыть урок</button>
              </Link>
            </div>
          </Col>
          {/* 10 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 10</p>
              <h2 className="theme-of-lesson-course">
              📌 Плагины в Figma
              </h2>
            </div>
            <div className="2-element-block">
              <Link to="/pay4open">
                <button className="open-lesson-button-not-active">{element} Открыть урок</button>
              </Link>
            </div>
          </Col>
          {/* 11 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 11</p>
              <h2 className="theme-of-lesson-course">
              📌 Прототипируем
              </h2>
            </div>
            <div className="2-element-block">
              <Link to="/pay4open">
                <button className="open-lesson-button-not-active">{element} Открыть урок</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Module3;