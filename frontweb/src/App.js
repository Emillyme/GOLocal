import React from 'react';
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Sobre from './Pages/Sobre/Sobre';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import News from './Components/News/News';
import Popular from './Components/Popular/Popular';


const App = () => {
    return(
        <>
        <Navbar/>
        <Home/>
        <Popular/>
        <News/>
        <Footer/>
        </>
    )
}

export default App;