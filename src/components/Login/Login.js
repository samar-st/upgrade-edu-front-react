import React from "react";
import upg from "../../images/Group 39520.png";
import "../Login/Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <>
      <div className="login-container">
       <div className="logo-item-div">
       <img src={upg} alt="Logo" className="img-logo" />
       </div>
        <div className="form-login-container">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="title-of-form">Вход в аккаунт ученика</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Пароль" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <a href="#" className="forget-password-link">Забыли пароль?</a>
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-btn">
          Войти
          </Button>
        </Form>
        </div>
        
      </div>
    </>
  );
}

export default Login;
