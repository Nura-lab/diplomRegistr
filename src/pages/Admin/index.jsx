import React from "react";
import css from "./style.css";
import nine from "./../../components/img/nine.png";
import two from "./../../components/img/two.png";
import shopping from "./../../components/img/shopping.png";
import Footer from "./../../components/Footer/Footer";
import logo2 from ".././../components/img/logo2.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Header from "../../components/Header";
import { useContext } from "react";
import { AppContext } from "../../context/AppContextProvider";
import { useEffect } from "react";

export default function Admin() {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {

    if (!state.isAuth) {
      window.location.href = "/auth/signin";
    }
  }, []);

  return (
    <div>
      <Header />
      <div class="container">
        <div class="admin">
          <div>
            <div class="profile">
              <b>
                <div className="line"></div>Ваш аккаунт
              </b>
              <div>
                <button className="buttons">
                  <img className="icon" src={two} /> Ваш профиль
                </button>
                <button className="buttons">
                  <img className="icon" src={nine} />
                  Кошелек
                </button>
                <button className="buttons">
                  <img className="icon" src={shopping} />
                  Карзина
                </button>
                <button className="buttons">
                  <img className="icon" src={shopping} />
                  Скидки
                </button>
                <b>
                  <div className="line"></div>Управление
                </b>
                <button className="buttons">
                  <img className="icon" src={shopping} alt="" />
                  Добавить Роль
                </button>
                <button className="buttons">
                  <img className="icon" src={shopping} alt="" />
                  Настроить Рольи
                </button>
                <button className="buttons">
                  <img className="icon" src={shopping} alt="" />
                  Товары
                </button>
                <button className="buttons">
                  <img className="icon" src={shopping} alt="" />
                  Планироване
                </button>
                <button className="buttons">
                  <img className="icon" src={shopping} alt="" />
                  Кефтеме
                </button>
                <b>
                  <div className="line"></div>Настройки
                </b>
                <button className="buttons">
                  <img className="icon" src={shopping} alt="" />
                  Конфиденцальнось
                </button>
                <button className="buttons">
                  <img className="icon" src={shopping} alt="" />
                  Настройка
                </button>
              </div>
            </div>
            <button class="exit">Выход</button>
          </div>
          <div class="next">
            <button class="save">Сохранить</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
