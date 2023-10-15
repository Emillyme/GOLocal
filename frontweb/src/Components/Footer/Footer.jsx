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
            <AiFillGithub className="icon" />
            <AiOutlineWhatsApp className="icon" />
          </div>
        </div>

        <div className="footerLinks">
            <span className="linkTitle">
                Páginas
            </span>
            <li>
                <a href="#Destino">Home</a>
            </li>
            <li>
                <a href="#Destino">Sobre</a>
            </li>
            <li>
                <a href="#Destino">Empresas</a>
            </li>
            <li>
                <a href="#Destino">Anúncios</a>
            </li>
        </div>

        <div className="footerLinks">
            <span className="linkTitle">
                Contato
            </span>
            <span className="phone">+55 19 49494-4949</span>
            <span className="email">golocal@gmail.com</span>
        </div>


      </div>
    </div>
  );
};

export default Footer;
