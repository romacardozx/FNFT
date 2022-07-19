import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import super1 from "../assets/super1.png";
import super3 from "../assets/super3.png";

export default function Free() {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Nuestra idea</h2>
          <p className="description">
          </p>
          <p className="description">
          FaNFTics intenta revolucionar el fanatismo y la manera en la cual los fans interaccionan con sus equipos. 
El proyecto cuenta con múltiples objetivos, pero siempre con la idea centrada en la utilidad que le vamos a ofrecer a los NFT holders de cada club. 

          </p>
        </div>
      </div>
     
    </div>
  );
}
