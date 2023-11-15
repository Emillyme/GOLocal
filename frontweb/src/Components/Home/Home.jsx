import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Encontre Tudo Em Hortolândia</h1>

          <p className="subTitle">Mais que um Guia Comercial!</p>
        </div>

      <div className="cardHome">
        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="Location">Local</label>
            <input
              type="text"
              placeholder="Local... Ex: Shopping de Hortolândia"
            />
          </div>

          <div className="categoryDiv">
            <label htmlFor="Category">Categoria</label>
            <select name="categorias">
              <option value="Nenhuma">Nenhuma</option>
              <option value="Moda">Moda</option>
              <option value="Comida">Comida</option>
              <option value="Saude">Saúde</option>              
              <option value="Empresas">Empresas</option>
            </select>
          </div>
          
            <button className="buscar">
               Buscar
            </button>

        </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
