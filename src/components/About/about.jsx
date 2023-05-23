import React from "react";
import css from "./about.module.css";
import about_logo from "../img/Слой 2.png";
import about_four from "../img/about_four.svg";
import about_five from "../img/about_five.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import fri from "../img/fri.png";
// import { Button } from '@mui/material'
// import { Input } from '@mui/material';

const About = () => {
  const src =
    "  https://player.vimeo.com/external/371926341.sd.mp4?s=5e51368ee1b1fc8f1fa1e4f41dd688ebab25d9b1&profile_id=164&oauth2_token_id=57447761";
  return (
    <div>
      <Header />
      <div className={css.container}>
        <div className={css.about}>
          <div className={css.fri}></div>
          <div className={css.start}></div>
          <div className={css.about_text}>
            <img src={about_logo} alt="" />
            <h1>KЫРГЫЗ ДААМЫ</h1>
            <p>
              Fusce vitae felis ut diam pharetra tristique id nec nulla. Fusce
              ac ipsum suscipit, commodo orci et, porta ex. Pellentesque tempus
              nulla eu erat pulvinar, vitae varius massa convallis. Mauris
              vestibulum sapien vitae orci ullamcorper dapibus. Integer quis
              enim urna. Fusce egestas felis metus, nec tincidunt elit finibus
              ac. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Nam eleifend,
              lectus sed porttitor ullamcorper, massa risus ultricies magna, in
              molestie ex nibh non elit. Donec fermentum erat lorem, sed gravida
              tellus rutrum quis.
            </p>
          </div>
          <div className={css.end}></div>
          <div className={css.about_second}>
            <div className={css.about_video}>
              <video className={css.video} controls width="100%">
                <source src={src} type="video/mp4" />
              </video>
            </div>
            <div className={css.video_text}>
              <h1>Lorem Ipsum</h1>
              <p>
                Fusce vitae felis ut diam pharetra tristique id nec nulla. Fusce
                ac ipsum suscipit, commodo orci et, porta ex. Pellentesque
                tempus nulla eu erat pulvinar, vitae varius massa convallis.
                Mauris vestibulum sapien vitae orci ullamcorper dapibus. Integer
                quis enim urna. Fusce egestas felis metus, nec tincidunt elit
                finibus ac. Aliquam erat volutpat. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Nam eleifend, lectus sed porttitor ullamcorper, massa risus
                ultricies magna, in molestie ex nibh non elit. Donec fermentum
                erat lorem, sed gravida tellus rutrum quis.
              </p>
            </div>
          </div>
          <div className={css.about_three}></div>
          <div className={css.about_four}>
            <h1>Биздин Ашпоздор</h1>
            <div className={css.fotos}>
              <img src={about_four} alt="" />
              <img src={about_four} alt="" />
              <img src={about_four} alt="" />
              <img src={about_four} alt="" />
            </div>
          </div>
          <div className={css.about_five}>
            <div>
              <img className={css.about_five_foto} src={about_five} alt="" />
            </div>
            <div className={css.five_text}>
              <h1>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
