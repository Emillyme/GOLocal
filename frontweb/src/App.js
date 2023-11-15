import React from 'react';
import './app.css'
import Navbar from './Components/Navbar/Navbar';
import Sobre from './Pages/Sobre/Sobre';
import Footer from './Components/Footer/Footer';


const App = () => {
    return(
        <>
        <Navbar/>
        <Sobre/>
        </>
    )
}

export default App;