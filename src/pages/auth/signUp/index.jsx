import React, { useState } from "react";
import css from "./index.css";
import sign from "./../../../components/img/signUp.png";
import logof from "./../../../components/img/logo1.png";
// import { Button } from '@mui/material'
// import { Input } from '@mui/material';
import Forgot from "../Forgot";
// регистрация
const SignUp = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeSurname(e) {
    setSurname(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://127.0.0.1:8000/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        email: email,
        password: password,
      }),
    }).then(async (res) => {
      console.log(await res.json());
    });
  }

  return (
    <div className="main">
      <div className="signUp">
        <form onSubmit={handleSubmit}>
          <h1 className="sign_up_title">катталуу</h1>
          <div className="label_input">
            <label className="signup_label">Аты</label>
            <input
              type="text"
              className="signup_input"
              placeholder="aты"
              value={name}
              onChange={handleChangeName}
            />
            <label className="signup_label">Фамилясы</label>
            <input
              type="text"
              className="signup_input"
              placeholder="фамилясы"
              value={surname}
              onChange={handleChangeSurname}
            />
            <label className="signup_label">Эл.почта</label>
            <input
              type="text"
              className="signup_input"
              placeholder="Эл.почта"
              value={email}
              onChange={handleChangeEmail}
            />
            <label className="signup_label">Пароль</label>
            <input
              type="text"
              className="signup_input"
              placeholder="Пароль"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <div className="forgot_password">
            <div className="checbox">
              <input className="box" type="checkbox" name="check" id="" />
              <p>Remember for 30 days </p>
            </div>
            <div>
              <a className="href" href="../Forgot">
                Forgot password:
              </a>
            </div>
          </div>
          <button type="submit" className="sign_up">
            Sign up
          </button>
          <div className="signup_free">
            <p>Don’t have on account?</p>
            <button className="sign_free_button">Sign up for free</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
