import React, { useState } from "react";
import logo2 from ".././../components/img/logo2.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import css from "./index.module.css";
import { toggleSidebar } from "../../store/reducers/foods";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import SidebarOrders from "../../components/SidebarOrders/SidebarOrders";

const Header = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.foods);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className={css.container}>
      <SidebarOrders />
      <nav className={css.nav}>
        <div>
          <img className={css.logo} src={logo2} />
        </div>
        <ul>
          <li>
            <Link to="/">Негизги баракча</Link>
          </li>
          <li>
            <Link to="/TradionalFoods">Улуттук тамактар</Link>
          </li>
          <li>
            <Link to="/Publick">Меню</Link>
          </li>
          <li>
            <Link to="/admin">Профиль</Link>
          </li>
          <li>
            <Link to="/About">Биз жонундо</Link>
          </li>
          <li>
            <div className={css.orders_link}>
              <Button onClick={handleToggle}>
                <ShoppingCartIcon />
              </Button>
              <span className={css.orders_count}>{orders.length}</span>
            </div>
          </li>
          <button className={css.sign}>
            <Link to="/auth/signup">Катталуу</Link>
          </button>
          <button className={css.login}>
            <Link to="/auth/signin">Кируу</Link>
          </button>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
