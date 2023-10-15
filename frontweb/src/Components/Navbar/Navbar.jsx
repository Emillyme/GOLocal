import React, {useState} from 'react';
import './navbar.css';
import {AiFillCloseCircle} from 'react-icons/ai';
import {FiMenu} from 'react-icons/fi';

const Navbar = () => {

/* para ativar a nav bar*/
    const [active, setActive] = useState('navBar')
    const showNav = () =>{
        setActive('navBar activeNavBar');
    }
    
/* para remover a nav bar*/
    const removeNav = () =>{
        setActive('navBar')
    }

// código para navbar ficar com efeito quando descer
    const [transparent, setTransparent] = useState('header')
    const addBg = () => {
        if(window.scrollY >= 10){
            setTransparent('header activeHeader')
        }
        else{
            setTransparent('header')
        }
    }
    window.addEventListener('scroll', addBg);

    return(
        <section className="navBarSection">
            <div className={transparent}>
                <div className="logoDiv">
                   <div a href="#" className="logo">
                    <h1 className="flex">
                    golocal.
                    </h1>
                    </div>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        
                        <li className="navItem">
                            <a href="#home" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#Sobre" className="navLink">Sobre</a>
                        </li>

                        <li className="navItem">
                            <a href="#Empresas" className="navLink">Empresas</a>
                        </li>

                        <li className="navItem">
                            <a href="#Anuncios" className="navLink">Anúncios</a>
                        </li>

                        <li className="navItem">
                            <a href="#Contato" className="navLink">Contato</a>
                        </li>

                        <div className="headerBtns flex">
                            <button className='btn loginBtn'>
                                <a href="#Login">Login</a>
                            </button>
                            <button className='btn'>
                                <a href="#Cadastro" >Cadastro</a>
                            </button>
                        </div>

                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <FiMenu className="icon" />
                </div>
            </div>
        </section>
    )
}

export default Navbar;