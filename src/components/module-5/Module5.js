import React from "react";
import "../../components/module-5/Module5.css";
import { Col, Container, Row } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';


const Module5 = () => {

  const element = <FontAwesomeIcon icon={faLock} style={{color: "#000000",}} />

  return (
    <div className="fully-bg-courses-content">
      <Header />
      <Container className="included-container">
        <Row>
          <Col xs="auto" className="name-module-courses">
            <ListGroup className="text-surrounding">
              <ListGroup.Item className="name-of-module-text">
                5. Изучение TILDA
              </ListGroup.Item>
            </ListGroup>
          </Col>
          {/* 1 section */}
          <Col xs={12} className="list-block-courses-lesson">
            <div className="1-element-block">
              <p className="lesson-count-number">Урок 1</p>
              <h2 className="theme-of-lesson-course">📌 Знакомство и изучение функционала Tilda</h2>
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
              📌 Учимся работать в Tilda "Zero Block"
              </h2>
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

export default Module5;
