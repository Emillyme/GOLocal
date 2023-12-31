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
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

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
    
    <>
    <Navbar/>

    <section className="Sobre-Section-White">
      <div className="Sobre-container-Sobre">
        <div className="SobreText">
          <h1 className="Sobre-Title">Conheça nosso time!</h1>
          <p className="Sobre-subTitle">
            Os desenvolvedores e futuros profissionais :D
          </p>
        </div>
      </div>

      <div className="Sobre-row">
        {Data.map(({ img, name, job, color }) => (
          <div className="Sobre-column" key={name}>
            <div className="Sobre-card" style={{ border: `1px solid ${color}` }}>
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
        ))}
      </div>
    </section>

    <Footer/>
    </>

  );
};

export default Sobre;
