import React, { useState } from "react";
import css from "./index.css";
import PopularItems from "../../components/PopularItems";
import Footer from "../../components/Footer/Footer";
// import footerlogo from "../../components/img/footerlogo.png";
import user from "../../components/img/user.png";
import search from "../../components/img/search.png";
import star from "../../components/img/star.png";
import kgzdaam from "../../components/img/kgzdam.png";
import { Button } from "@mui/material";
import data from "../../data/foods.json";
import { Input } from "@mui/material";
import Header from "../../components/Header";

const filterValues = [""];

const Public = () => {
  const [filterValue, setFilterValue] = useState(0);

  const mySort = (data, type) => {
    switch (type) {
      case 0:
        return data.sort((a, b) => (a.name < b.name ? -1 : 1));
      case 1:
        return data.sort((a, b) => (a.name > b.name ? -1 : 1));
      case 2:
        return data.sort((a, b) => a.price - b.price);
      default:
        return data;
    }
  };

  console.log(filterValue);

  return (
    <div>
      <Header/>
      <div className="container">
        <div className="cards">
          <div className="searchBlock">
            <div className="text">
              <h2>TRADITIONAL FAVORITES</h2>
            </div>
            <div className="searching_block">
              <div className="sort">
                <img src={search} alt="" />
                <input
                  className="search_input"
                  type="text"
                  onChange={(event) => {
                    setFilterValue(event.target.value);
                  }}
                />
                <button onClick={mySort()} class="search_button">
                  издоо
                </button>
              </div>
              <div className="starImg">
                <img src={star} alt="" />
              </div>
              <select className="tradition">
                <option value="">Традиционный</option>
                <option value="">Традиционный</option>
              </select>
              <select
                className="lunch"
                onChange={(e) => setFilterValue(Number(e.target.value))}
              >
                <option value="0">A-Z</option>
                <option value="1">Z-A</option>
                <option value="2">Price</option>
              </select>
            </div>
          </div>
          <div className="blockThree">
            {mySort(data, filterValue).map((el, id) => {
              return <PopularItems data={el} key={id} />;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Public;
