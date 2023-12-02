import React, { useState } from "react";
import "./anunciosP.css";
import { BsArrowRight } from "react-icons/bs";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

//imagens
import img1 from "../../Assets/images/(1).png";
import img2 from "../../Assets/images/(2).jpg";
import img3 from "../../Assets/images/(3).jpg";
import img4 from "../../Assets/images/(4).jpg";

const CATEGORIES = ["MODA", "SAÚDE", "EMPRESAS", "COMIDA"];

const Data = [
    {
        imgSrc: img2,
        name: "Elegância",
        description: "Descrição para Elegância.",
        location: "Hortolândia - Centro",
        category: "MODA",
    },
 
    {
        imgSrc: img3,
        name: "Café Horto",
        description: "Descrição para Café Horto.",
        location: "Hortolândia - Centro",
        category: "SAÚDE",
    },
    {
        imgSrc: img4,
        name: "Shopping",
        description: "Descrição para Shopping.",
        location: "Hortolândia - Centro",
        category: "EMPRESAS",
    },
    {
        imgSrc: img1,
        name: "Colchões",
        description: "Descrição para Colchões.",
        location: "Hortolândia - Centro",
        category: "COMIDA",
    },
];

const AnunciosP = () => {
    const [selectedCategory, setSelectedCategory] = useState("MODA");
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <Navbar />
            <div className="anuncios-Section-White">
                <div className="container-anuncios">
                    <div className="anunciosText">
                        <h1 className="anuncios-Title">Praça Poderosa</h1>
                        <h1 className="anuncios-Title">{selectedCategory}</h1>
                    </div>
                </div>
            </div>
          
            <section className="anuncios section container">
                <div className="sidebar">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <h2>Categorias</h2>
                    
                    <ul>
                        {CATEGORIES.map((category) => (
                            <li
                                key={category}
                                className={selectedCategory === category ? "active" : ""}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mainContent" >
                    {Data.filter(
                        (item) =>
                            item.category === selectedCategory &&
                            item.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ).map(({ name, imgSrc, description, location }) => (
                        <div className="content-dest" key={name}>
                            <div className="singleDestination">
                                <div className="destImage">
                                    <img src={imgSrc} alt="ImageTitle" />
                                    <BsArrowRight className="icon-info" />
                                </div>

                                <div className="destFooter">
                                    <div className="name">{name}</div>

                                    <div className="description-text">
                                        <p>{description}</p>
                                    </div>

                                    <div className="destText flex">
                                        <h6>{location}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default AnunciosP;
