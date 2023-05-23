import React from "react";
import css from "./index.css";

export default function Forgot() {
  return (
    <div className="forgot">
      <form className="form_forgot">
        <div className="forgot_content">
          <h1 className="forgot_title">Забыли Пароль</h1>
          <div className="forgot_inputs">
            <div htmlFor="forgot">Email</div>
            <input className="forgot_input" placeholder="Enter your email" />
            <p className="forgot_text">
              Пожалуйста, сообщите нам свой адрес электронной почты, и мы вышлем
              вам ссылку,по которой вы сможете сбросить пароль.
            </p>
          </div>
          <button className="forgot_send_button">Отправить</button>
          <div className="forgot_buttons">
            <button className="forgot_login">Войти</button>
            <button className="forgot_signup">Регистрация</button>
          </div>
        </div>
      </form>
    </div>
  );
}
