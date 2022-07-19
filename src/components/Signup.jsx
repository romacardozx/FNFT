import React from "react";
import signup from "../assets/signup.png";
export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Proximamente</p>
          <h1 className="title">Se vienen anuncios importantes….</h1>
          <p className="description">
          No te pierdas ninguna de nuestras novedades, suscríbete debajo para recibir nuestras noticias! 
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home image" height={400} width={400}/>
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
