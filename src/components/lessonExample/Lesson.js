import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import upg from "../../images/Group 39520.png";
import profileImg from "../../images/Avatar.svg";
import "../../components/lessonExample/Lesson.css";
import { Row } from "react-bootstrap";
import LessonImg from "../../images/0_dqXItghLxcMN_ibt 1.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import cardimg from "../../images/Rectangle 596.svg";
import strangeVideo from "../../images/rafaLeao.mp4";
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const Lesson = () => {
  return (
    <>
      {/* Header part of lesson js */}
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={upg}
              width="214"
              height="55"
              className="d-inline-block align-top"
              alt="Upgrade Education logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="last-item-section">
              {/* <Nav.Link href="/">
            <p className='language-selector'>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="toggle"></span>
            </label>
            </p>
            </Nav.Link> */}
              <Nav.Link href="/profile">
                <img
                  src={profileImg}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="Upgrade Education logo"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* container part of lesson elements */}
      <div className="lesson-template-content">
        <Container className="extra-content-lesson-template">
          <Row className="extra-include-block">
            <p className="number-of-lesson-template">Урок 1</p>
            <h1 className="title-lesson-elements">
              Interface UX/UI Design foundation
            </h1>
            <video controls>
              <source src={strangeVideo} type="video/mp4" />
            </video>

            <span className="context-of-lesson-element">What is UX?</span>
            <p className="text-elements-of-lesson-template">
              What UX Designers Do Goes Beyond UI Design “User Experience
              Design” is often used interchangeably with terms such as “User
              Interface Design” and “Usability.”
            </p>
            <p className="text-elements-of-lesson-template">
              What UX Designers Do Goes Beyond UI Design “User Experience
              Design” is often used interchangeably with terms such as “User
              Interface Design” and “Usability.”
            </p>
            <p className="text-elements-of-lesson-template">
              What UX Designers Do Goes Beyond UI Design “User Experience
              Design” is often used interchangeably with terms such as “User
              Interface Design” and “Usability.”
            </p>
            <img src={LessonImg} alt="UX/UI img" />
            <h1 className="title-lesson-elements">
              Бонусные материалы к уроку
            </h1>
            {/* 3 cards section for download */}
            <Row xs={12} md={3} className="g-3">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx} className="out-block-card">
                  <Card className="inner-block-card">
                    <Card.Img variant="top" src={cardimg} className="extra-resources-lesson" />
                    <Card.Body>
                      <Card.Text className="text-resources-lesson">
                      User Interface design Guidelines for beginners
                      </Card.Text>
                      <button type="submit" className="button-for-download-resources">Скачать</button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Row>
          <Link to="/homework">
            <button type="button" className="continue-button-bottom">
              Продолжить
            </button>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default Lesson;
