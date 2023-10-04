import React from 'react';
import './app.css'
import Popular from './Components/Popular/Popular';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Offers from './Components/Offers/Offers';
import Sobre from './Components/Sobre/Sobre';
import Footer from './Components/Footer/Footer';

const App = () => {
    return(
        <>
        <Navbar/>
        <Home/>
        <Popular/>
        <Offers/>
        <Sobre/>
        <Footer/>
        </>
    )
}

export default App;