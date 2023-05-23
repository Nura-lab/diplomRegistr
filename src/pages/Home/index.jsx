import React, { useEffect, BrowserRouter, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { loadFull } from "tsparticles";
import css from "./Home.module.css";
import bg from "./../../components/img/bg.png";
import cart from "../../components/img/img1.png";
import cart2 from ".././../components/img/img2.png";
import cart1 from ".././../components/img/img3.png";
import cart5 from ".././../components/img/img4.png";
import cart3 from ".././../components/img/img5.png";
import cart4 from ".././../components/img/img6.png";
import slide from ".././../components/img/slide.png";
import Footer from "../../components/Footer/Footer";
import UserProfile from "../UserProfile";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useDispatch, useSelector } from "react-redux";
import "aos/dist/aos.css";
import { Button } from "@mui/material";
import ActionAreaCard from "../../components/ActionAreaCard";
import WSPGallery from "../../components/ActionAreaCard/WSPGallery";
import Modal from "../../components/Modal/index";
import Header from "../../components/Header";
import fon_one from "../../components/img/fon1.svg";
import icecream from "../../components/img/iceCream.svg";
import tatty from "../../components/img/taty.svg";
import pizza from "../../components/img/pissa.svg";
import tamak from "../../components/img/tamak.svg";
import { Alert } from '@mui/material';

// import "node_modules/video-react/dist/video-react.css"; // import css

const sliderImages = [
  {
    url: "https://img.freepik.com/free-photo/flat-lay-asian-food-arrangement_23-2149182273.jpg?size=626&ext=jpg&ga=GA1.1.2144432171.1680949334&semt=ais",
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

const Home = () => {
  const src =
    "  https://player.vimeo.com/external/371926341.sd.mp4?s=5e51368ee1b1fc8f1fa1e4f41dd688ebab25d9b1&profile_id=164&oauth2_token_id=57447761";

  // окно
  const [openModal, setOpenModal] = useState(false);

  //   слайдер
  const [imageNum, setImageNum] = useState(1);
  //  orders
  // const {orders} = useSelector((state)=>state.foods)

  const [data, setData] = useState(null);
  useEffect(() => {
    AOS.init({ duration: 2000 });
    fetch("https://127.0.0.1:8000/api", {
      method: "POST",
    }).then(async (response) => {
      console.log(await response.json());
    });
  }, []);

  return (
    <div>
      <Header />
      <div className={css.container}>
        <div className={css.blockOne} data-aos="flip-right">
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
          <div className={css.blockContent}>
            <h2 data-aos="zoom-in">Нукура Кыргыз Даамы</h2>
            <br />
            <p data-aos="zoom-in">
              Fusce vitae felis ut diam pharetra tristique id nec nulla. Fusce
              ac ipsum suscipit, commodo orci et, porta ex. Pellentesque tempus
              nulla eu erat pulvinar, vitae varius massa convallis. Mauris
              vestibulum sapien vitae orci ullamcorper dapibus. Integer quis
              enim urna. Fusce egestas felis metus, nec tincidunt elit finibus
              ac. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra,per inceptos himenaeos. Nam eleifend,
              lectus sed porttitor ullamcorper, massa risus ultricies magna, in
              molestie ex nibh non elit. Donec fermentum erat lorem, sed gravida
              tellus rutrum quis.
            </p>
            <p data-aos="zoom-in">
              Fusce vitae felis ut diam pharetra tristique id nec nulla. Fusce
              ac ipsum suscipit, commodo orci et, porta ex. Pellentesque tempus
              nulla eu erat pulvinar, vitae varius massa convallis. Mauris
              vestibulum sapien vitae orci ullamcorper dapibus. Integer quis
              enim urna. Fusce egestas felis metus, nec tincidunt elit finibus
              ac. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra,per inceptos himenaeos. Nam eleifend,
              lectus sed porttitor ullamcorper, massa risus ultricies magna, in
              molestie ex nibh non elit. Donec fermentum erat lorem, sed gravida
              tellus rutrum quis.
            </p>
            <div className={css.fon_one}>
              <img src={fon_one} alt="" />
            </div>
            <div className={css.icecream}>
              <img src={icecream} alt="" />
            </div>
            <div className={css.tatty}>
              <img src={tatty} alt="" />
            </div>
          </div>
        </div>
        <div className={css.blockThree}>
          <img src={cart} data-aos="flip-right" />
          <img src={cart1} data-aos="flip-right" />
          <img src={cart2} data-aos="flip-right" />
          <img src={cart5} data-aos="flip-right" />
          <img src={cart3} data-aos="flip-right" />
          <img src={cart4} data-aos="flip-right" />
        </div>
        <center>
          <Button
            href="/ActionAreaCard"
            style={{
              backgroundColor: "#FFB800",
              color: "black",
              textAlign: "center",
            }}
            variant="contained"
          >
            галерея
          </Button>
        </center>
        <div className={css.blockFour}>
          <div className={css.video} data-aos="zoom-in">
            <video className={css.video} controls width="60%">
              <source src={src} type="video/mp4" />
            </video>
          </div>
          <div className={css.pizza}>
            <img src={pizza} alt="" />
          </div>
          <div className={css.tamak}>
            <img src={tamak} alt="" />
          </div>
          <p data-aos="zoom-in">
            Fusce vitae felis ut diam pharetra tristique id nec nulla. Fusce ac
            ipsum suscipit, commodo orci et, porta ex. Pellentesque tempus nulla
            eu erat pulvinar, vitae varius massa convallis. Mauris vestibulum
            sapien vitae orci ullamcorper dapibus. Integer quis enim urna. Fusce
            egestas felis metus, nec tincidunt elit finibus ac. Aliquam erat
            volutpat. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Nam eleifend, lectus sed
            porttitor ullamcorper, massa risus ultricies magna, in molestie ex
            nibh non elit. Donec fermentum erat lorem, sed gravida tellus rutrum
            quis.
          </p>
        </div>

        <center>
          <Button
            onClick={() => setOpenModal(true)}
            variant="contained"
            style={{ backgroundColor: "#FFB800", color: "black", position: "absolute" , top: 2300}}
            className="modalButton"
          >
            Meni bas
          </Button>
          <Modal open={openModal} onClose={() => setOpenModal(false)} />
         
        </center>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
