import React from "react";
import "./sobre.css";
import headerImage from "../../Assets/images/us/grupo.png";

//imagens de nois :))
import Emy from "../../Assets/images/us/emy.png";
import Lulu from "../../Assets/images/us/lulu.png";
import Saritah from "../../Assets/images/us/saritah.png";
import Vynii from "../../Assets/images/us/vynii.png";
import Manu from "../../Assets/images/us/manu.jpg";

//ICONS
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Data = [
  {
    img: Emy,
    name: "Emilly Mello",
    job: "FrontEnd Developer",
    color: "#F55489",
  },
  {
    img: Lulu,
    name: "Luiz França",
    job: "BackEnd Developer",
    color: "#757575",
  },
  {
    img: Saritah,
    name: "Sarah Ester",
    job: "Design",
    color: "#963EAA",
  },
  {
    img: Vynii,
    name: "Vinicius Galvão",
    job: "BackEnd Developer",
    color: "#4E6DE0",
  },
  {
    img: Manu,
    name: "Manuela Costa",
    job: "FrontEnd Developer",
    color: "#FF842E",
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

      {Data.map(({ img, name, job, color }) => (
        <div className="row" key={name}>
          <div className="column">
            <div className="card" style={{ border: `1px solid ${color}` }}>
              <div className="imgProfile">
                <img src={img} alt="ImageTitle" className="foto" />
              </div>
              <h3 className="nome" style={{ color: color }}>
                {name}
              </h3>
              <p style={{ color: color }}>{job}</p>

              <a href="#link" style={{ color: color }}>
                <FaGithub className="social-icon" />
              </a>
              <a href="#link" style={{ color: color }}>
                <FaLinkedin className="social-icon" />
              </a>
              <a href="#link" style={{ color: color }}>
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
