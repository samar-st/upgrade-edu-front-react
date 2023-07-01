import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import upg from "../../images/Group 39520.png";
import { Col, Form, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../../components/profile/Profile.css";
import profileImg from "../../images/Ellipse 446.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {

  const editElement = <FontAwesomeIcon icon={faPenToSquare} style={{color: "#ffffff",}} />

  return (
    <div className="profile-content">
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
        </Container>
      </Navbar>
      {/* Information about links to pages */}
      <Container>
        <Row>
          <Breadcrumb className="url-content-pages">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Profile
            </Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        {/* container of profile */}
        <Row className="content-profile-section">
          <Col xs={4} className="block-of-image">
            <img
              src={profileImg}
              alt="profile user img"
              className="user-profi-img"
            />
            <span className="full-name-user">Рустам Хамзаев</span>
            <div className="informs-users">
              <div className="country-user">
                <span className="title-country">Страна</span>
                <span className="name-of-country">Узбекистан</span>
              </div>
              <div className="date-reg-user">
                <span className="date-registration">Дата регистрации</span>
                <span className="fully-date-reg">05.06.2023</span>
              </div>
            </div>
            <button type="submit" className="edit-button">
              Редактировать {editElement}
            </button>
          </Col>
          <Col xs={8} className="block-of-inputs">
            <h2 className="text-my-profile">Мой профиль</h2>
            <Form>
              <Row className="block-included-two-inputs">
                <Col xs={5}>
                  <Form.Label className="label-text-area">
                    Cтрана проживания
                  </Form.Label>
                  <Form.Control placeholder="Zuichi, Switzerland" disabled />
                </Col>
                <Col xs={5}>
                  <Form.Label className="label-text-area">Возраст</Form.Label>
                  <Form.Control placeholder="21 год" disabled />
                </Col>
              </Row>
                <Col xs={10} className="email-area">
                  <Form.Label className="label-text-area">Email</Form.Label>
                  <Form.Control
                    placeholder="uihutofficial@gmail.com"
                    disabled
                  />
                </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
