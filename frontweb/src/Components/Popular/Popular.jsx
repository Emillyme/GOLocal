import React from "react";
import "./popular.css";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

//imagens:
import img2 from "../../Assets/images/(2).jpg";
import img3 from "../../Assets/images/(3).jpg";
import img4 from "../../Assets/images/(4).jpg";

//data:

const Data = [
  {
    imgSrc: img2,
    name: "Elegância Moderna",
    description:
      "Explore a sofisticação da moda contemporânea na Elegância Moderna. Encontre roupas elegantes e acessórios!",
    location: "Hortolândia - Av. Falta de Criatividade.",
    status: "Fechado",
  },

  {
    imgSrc: img3,
    name: "Café no Jardim",
    description:
      "No Café no Jardim, mergulhe em uma experiência sensorial única. Delicie-se com grãos de café selecionados, bolos caseiros e aconchegue-se em nosso ambiente com jardim!",
    location: "Hortolândia - Centro",
    status: "Aberto",
  },

  {
    imgSrc: img4,
    name: "TechZone",
    description:
      "Navegue por uma variedade impressionante de produtos eletrônicos de última geração, incluindo smartphones, laptops, dispositivos inteligentes e acessórios inovadores.",
    location: "Hortolândia - R. Pelé",
    status: "Aberto",
  },
];

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <p>Separamos para você</p>
            <h2 className="secTitle">Lugares Populares</h2>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeft className="icon-popular leftIcon" />
            <BsArrowRight className="icon-popular" />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ name, imgSrc, description, status, location }) => {
            return (
              <div className="content-dest">
                <div className="singleDestination">
                  <div className="destImage">
                    <img src={imgSrc} alt="ImageTitle" />

                    <BsArrowRight className="icon-info" />
                  </div>

                  <div className="destFooter">
                    <div className="name">{name}</div>

                    <div className="description-text">
                      <p>{description}</p>
                    </div>

                    <div className="destText flex">
                      <h6>{location}</h6>
                      <span className="flex status">
                        {status}
                      </span>
                    </div>          
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
