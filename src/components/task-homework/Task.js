import React from "react";
import "../../components/task-homework/Task.css";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import upg from "../../images/Group 39520.png";
import profileImg from "../../images/Avatar.svg";
import { Link } from "react-router-dom";

const Task = () => {
  return (
    <div>
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
      <div className="hometask-template-content">
        <Container className="extra-content-lesson-template">
          <Row className="extra-include-block">
            <p className="name-of-lesson-homework">Задание</p>
            <h1 className="title-lesson-elements">
              Your task is to learn everything from lesson 1
            </h1>
            <span className="context-of-lesson-element">What is UX?</span>
            <p className="text-elements-of-lesson-template">
              What UX Designers Do Goes Beyond UI Design “User Experience
              Design” is often used interchangeably with terms such as “User
              Interface Design” and “Usability.”
            </p>
          </Row>
          <button type="button" className="continue-button-bottom">
            Продолжить
          </button>
        </Container>
      </div>
    </div>
  );
};

export default Task;
