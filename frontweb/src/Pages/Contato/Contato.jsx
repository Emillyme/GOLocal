import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './contato.css';

// Icons
import { MdHome } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Contato = () => {
    return (
        <>
            <Navbar />
            <section className="Section-White">
                <div className="container-contato">
                    <div className="ContatoText">
                        <h1 className="Contato-Title">Nos Contate</h1>
                        <p className="subTitle-Contato">
                            Estaremos à sua disposição!
                        </p>
                    </div>
                </div>

                <div className="containerContato">
                    <div className="row">
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <MdHome className='i' />
                                </div>
                                <div className="contact-info-content">
                                    <h4>Endereço</h4>
                                    <p> Remanso Campineiro, Hortolândia - 121212</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <FaPhone className='i' />
                                </div>
                                <div className="contact-info-content">
                                    <h4>Celular</h4>
                                    <p>+55 19 98422-2686</p>
                                </div>
                            </div>

                            <div className="contact-info-item">
                                <div className="contact-info-icon">
                                    <FaEnvelope className='i' />
                                </div>
                                <div className="contact-info-content">
                                    <h4>E-mail</h4>
                                    <p>golocal@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <form action="" id="contact-form">
                                <h2>Mande Mensagem</h2>
                                <div className="input-box">
                                    <input type="text" required={true} />
                                    <span>Nome</span>
                                </div>

                                <div className="input-box">
                                    <input type="email" required={true} />
                                    <span>E-mail</span>
                                </div>

                                <div className="input-box">
                                    <textarea required={true}></textarea>
                                    <span>Digite sua mensagem...</span>
                                </div>

                                <div className="input-box">
                                    <input type="submit" value="Send" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    );
}

export default Contato;
