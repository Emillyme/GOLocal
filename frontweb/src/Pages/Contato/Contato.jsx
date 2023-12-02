import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './contato.css';
import emailjs from '@emailjs/browser'

// Icons
import { MdHome } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Contato = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    function sandEmail(e){
        e.preventDefault();

        if (name === '' || email === '' || message === ''){
            alert('Preencha todos os campos');
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        
        emailjs.send("service_9wv7vd9", "template_dvendet", templateParams, "TCK4QYwuuJRIcOV7c")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log("ERRO: ", err)
        })
    }
    
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
                                    <p>golocal.oficial@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            
                            <form onSubmit={sandEmail} id="contact-form">
                                <h2>Mande Mensagem</h2>
                                
                                <div className="input-box">
                                    <input 
                                        type="text" 
                                        required={true}
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                    <span>Nome</span>
                                </div>

                                <div className="input-box">
                                    <input 
                                        type="email" 
                                        required={true}
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email} 
                                    />
                                    <span>E-mail</span>
                                </div>

                                <div className="input-box">
                                    <textarea 
                                        required={true}
                                        onChange={(e) => setMessage(e.target.value)}
                                        value={message}
                                    />
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
