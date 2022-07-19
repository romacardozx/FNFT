import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">Porque NFTs?</h2>
          <p className="description">
          Los NFTs poseen una oferta más limitada en comparación de las tokens, lo que da a un producto de mayor exclusividad.
          Se puede crear una comunidad detrás.
          No necesitan mantenimiento, ni liquidez.
          Producto coleccionable, más visible.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22.
          </p>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live on 11/22. Don't miss out on the
            release of our new NFT.
          </p>
        </div>
      </div>
    </div>
  );
}
