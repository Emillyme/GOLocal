import React from "react";
import "./popular.css";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

//imagens:
import img1 from "../../Assets/images/(1).png";
import img2 from "../../Assets/images/(2).jpg";
import img3 from "../../Assets/images/(3).jpg";
import img4 from "../../Assets/images/(4).jpg";

//data:

const Data = [
  {
    imgSrc: img2,
    name: "Elegância",
    description:
      "No Café no Jardim, mergulhe em uma experiência sensorial única. Delicie-se com grãos de café selecionados, bolos caseiros ",
    location: "Hortolândia - Centro",
  },

  {
    imgSrc: img3,
    name: "Café Horto",
    description:
      "No Café no Jardim, mergulhe em uma experiência sensorial única. Delicie-se com grãos de café selecionados, bolos caseiros ",
    location: "Hortolândia - Centro",
  },

  {
    imgSrc: img4,
    name: "Shopping",
    description:
      "No Café no Jardim, mergulhe em uma experiência sensorial única. Delicie-se com grãos de café selecionados, bolos caseiros ",
    location: "Hortolândia - Centro",
  },

  {
    imgSrc: img1,
    name: "Colchões",
    description:
      "No Café no Jardim, mergulhe em uma experiência sensorial única. Delicie-se com grãos de café selecionados, bolos caseiros ",
    location: "Hortolândia - Centro",
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
