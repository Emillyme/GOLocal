import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './contato.css';

const Contato = () => {
    return(
    <>
    <Navbar/>
      <section className="Section-White">
      <div className="container-Sobre">
        <div className="SobreText">
          <h1 className="Sobre-Title">Nos Contate</h1>
          <p className="subTitle">
            Nos contate para tirar qualquer dúvida sobre o projeto, estaremos a sua disposição!
          </p>
        </div>
      </div>
      </section>
    <Footer/>
    </>
    )
}

export default Contato;