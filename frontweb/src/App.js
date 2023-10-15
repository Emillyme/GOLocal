import React from 'react';
import './app.css'
import Popular from './Components/Popular/Popular';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Sobre from './Components/Sobre/Sobre';
import Footer from './Components/Footer/Footer';

const App = () => {
    return(
        <>
        <Navbar/>
        <Home/>
        <Popular/>
        <News/>
        <Sobre/>
        <Footer/>
        </>
    )
}

export default App;