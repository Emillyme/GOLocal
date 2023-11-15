import React from "react";
import "./sobre.css";
import headerImage from "../../Assets/images/us/grupo.png";

//imagens de nois :))
import Emy from "../../Assets/images/us/emy.png";
import Lulu from "../../Assets/images/us/lulu.png";
import Saritah from "../../Assets/images/us/saritah.png";
import Vynii from "../../Assets/images/us/emy.png";
import Manu from "../../Assets/images/us/manu.jpg";

//ICONS
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

//data:

const Data = [
  {
    img: Emy,
    name: "Emilly Mello",
    job: "FrontEnd Developer",
  },
  {
    img: Lulu,
    name: "Luiz França",
    job: "BackEnd Developer",
  },
  {
    img: Saritah,
    name: "Sarah Ester",
    job: "Design",
  },
  {
    img: Vynii,
    name: "Vinicius Galvão",
    job: "BackEnd Developer",
  },
  {
    img: Manu,
    name: "Manuela Costa",
    job: "FrontEnd Developer",
  },
];

const Sobre = () => {
  return (
    <section className="Section-White">
      <div className="container-Sobre">
        <div className="SobreText">
          <h1 className="Sobre-Title">Conheça nosso time!</h1>
          <p className="subTitle">
            Os desenvolvedores e futuros profissionais :D
          </p>
        </div>
      </div>

      {Data.map(({ img, name, job }) => (
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="imgProfile">
                <img src={img} alt="ImageTitle" className="foto" />
              </div>
              <h3 className="nome">{name}</h3>
              <p>{job}</p>

              <a href="#link">
                <FaGithub className="social-icon" />
              </a>
              <a href="#link">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="#link">
                <FaPinterest className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Sobre;
