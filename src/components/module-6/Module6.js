import React from "react";
import "../../components/module-6/Module6.css";
import { Col, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';


const Module6 = () => {

  const element = <FontAwesomeIcon icon={faLock} style={{color: "#000000",}} />

  return (
    <div className="fully-bg-courses-content">
      <Header />
      <Container className="included-container">
        <Row>
          <Col xs="auto" className="name-module-courses">
            <ListGroup className="text-surrounding">
              <ListGroup.Item className="name-of-module-text">
                6. Погружение в UX
              </ListGroup.Item>
            </ListGroup>
          </Col>
          {/* 1 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 1</p>
              <h2 className="theme-of-lesson-course">📌 Введение в UX-дизайн</h2>
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
              📌 Дизайн-мышление
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
              <h2 className="theme-of-lesson-course">📌 Что такое CJM</h2>
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
              <h2 className="theme-of-lesson-course">📌 Основы юзабилити</h2>
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
              <h2 className="theme-of-lesson-course">📌 Мобильный UX/UI</h2>
            </div>
            <div className="2-element-block">
              <Link to="/lesson">
                <button className="open-lesson-button">Открыть урок</button>
              </Link>
            </div>
          </Col>
          {/* 6 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 6</p>
              <h2 className="theme-of-lesson-course">📌 Jobs to be done</h2>
            </div>
            <div className="2-element-block">
              <Link to="/lesson">
                <button className="open-lesson-button">Открыть урок</button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Module6;
