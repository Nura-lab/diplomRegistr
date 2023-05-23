import React, { useRef, useEffect, useState } from "react";
import css from "./tradionalFoods.module.css";
import { Link } from "react-router-dom";
import item1 from ".././../components/img/item1.png";
import BCM from ".././../components/img/BCMENU.png";
import Traditional from "../Tradional/Tradional";
import Footer from "../../components/Footer/Footer";
import Public from "../Publick";
import SimpleImageSlider from "react-simple-image-slider";
import data from "../../data/menu.json";
import Header from "../../components/Header";
const sliderImages = [
  {
    url: "https://img.freepik.com/free-photo/arrangement-of-thanksgiving-day-delicious-dinner_23-2149100153.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=ais",
  },
  {
    url: "https://img.freepik.com/premium-photo/ready-made-dumplings-with-potatoes-and-mushrooms-in-a-plate-on-a-wooden-table_655426-329.jpg?size=626&ext=jpg",
  },
  {
    url: "https://img.freepik.com/free-photo/healthy-tasty-vegetables-grilled-on-pan_1220-4453.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=sph",
  },
  {
    url: "https://img.freepik.com/free-photo/top-view-table-full-of-delicious-food-composition_23-2149141352.jpg?size=626&ext=jpg",
  },
  {
    url: "https://img.freepik.com/free-photo/top-view-of-rice-with-carrot-cooked-with-lamb-served-with-yogurt-and-salad_141793-2449.jpg?size=626&ext=jpg&ga=GA1.2.2144432171.1680949334&semt=ais",
  },
  {
    url: "https://img.freepik.com/free-photo/above-view-tasty-food-assortment_23-2148941528.jpg?w=740&t=st=1680949512~exp=1680950112~hmac=9d859636a9cfbc78ac9c2dcaac95e2eeb80159d24013c268624bfc0414ff835f",
  },
  {
    url: "https://img.freepik.com/free-photo/arrangement-with-delicious-food-above-view_23-2148941556.jpg?w=740&t=st=1680949434~exp=1680950034~hmac=c45c925fea81a88ea79edbe05113bceb788572bde86d405881f5f6e7c041af97",
  },
];
const TradionalFoods = () => {
  //  slider
  const [imageNum, setImageNum] = useState(1);
  return (
    <div>
      <Header />
      {/* <SidebarOrders /> */}
      <div className={css.menu_container}>
        <div className={css.blockOne}>
          <SimpleImageSlider
            width={1160}
            height={500}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            onStartSlide={(index, length) => {
              setImageNum(index);
            }}
            autoPlayDelay={3}
          />
        </div>
        <div className={css.blockTwo}>
          {data.map((el, id) => {
            return <Traditional data={el} key={id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default TradionalFoods;
