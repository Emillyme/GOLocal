import React from "react";
import "./footer.css";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div a href="#" className="footerlogo">
            <h1 className="flex logo-f">golocal.</h1>
          </div>
          <div className="socials flex">
            <AiFillGithub className="icon-f" />
            <AiOutlineWhatsApp className="icon-f" />
          </div>
        </div>

        <div className="footerLinks">
            <span className="linkTitle">
                Páginas
            </span>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="Sobre">Sobre</a>
            </li>
            <li>
                <a href="Anuncios">Anúncios</a>
            </li>
        </div>

        <div className="footerLinks">
            <span className="linkTitle">
                Ajuda
            </span>
            <li>
                <a href="#Destino">Contato</a>
            </li>
            <li>
                <a href="#Destino">Privacy</a>
            </li>
            <li>
                <a href="#Destino">Etec De Hortolândia</a>
            </li>
        </div>

        <div className="footerLinks">
            <span className="linkTitle">
                Contato
            </span>
            <span className="phone">+55 19 49494-4949</span>
            <span className="email">golocal@gmail.com</span>
        
            <span className="etec">©️ ETEC DE HORTOLÂNDIA - TCC</span>
        
        </div>


      </div>
    </div>
  );
};

export default Footer;
