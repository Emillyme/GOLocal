import React from 'react';
import './App.css'
import Inicial from './Pages/Inicial/Inicial.jsx'
import Sobre from './Pages/Sobre/Sobre.jsx';
import AnunciosP from './Pages/AnunciosP/AnunciosP.jsx'
import AnunciosC from './Pages/AnunciosC/AnunciosC.jsx'
import Contato from './Pages/Contato/Contato';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Inicial/>}/> 
                <Route path="/Sobre" element={<Sobre/>}/>  
                <Route path="/AnunciosP" element={<AnunciosP/>}/>  
                <Route path="/AnunciosC" element={<AnunciosC/>}/>  
                <Route path="/Contato" element={<Contato/>}/>   
            </Routes>
        </Router>
        </>
        
    )
}

export default App;