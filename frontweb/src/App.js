import React from 'react';
import './app.css'
import Inicial from './Pages/Inicial/Inicial.jsx'
import Sobre from './Pages/Sobre/Sobre.jsx';
import Anuncios from './Pages/Anuncios/Anuncios.jsx'
import Contato from './Pages/Contato/Contato';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
    return(
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Inicial/>}/> 
                <Route path="/Sobre" element={<Sobre/>}/>  
                <Route path="/Anuncios" element={<Anuncios/>}/>  
                <Route path="/Contato" element={<Contato/>}/>   
            </Routes>
        </Router>
        </>
        
    )
}

export default App;