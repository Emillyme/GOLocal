import React from 'react';
import './news.css';

import {BsArrowRightShort} from 'react-icons/bs'

//importação das imagens:
import img from '../../Assets/images/(5).jpg';
import img2 from '../../Assets/images/(6).png';
import img3 from '../../Assets/images/(7).png';
import img4 from '../../Assets/images/(8).jpeg';

const Posts = [

    {
        id: 1,
        postImage: img,
        title: 'Concursos e processos seletivos na Unicamp',
        desc: 'Funcamp anuncia período de inscrições para novo Processo Seletivo 2023 REGIÃO DE CAMPINAS – UNICAMP ABRE CONCURSOS PÚBLICOS 2023 Publicidade',
    },
    {
        id: 2,
        postImage: img2,
        title: 'Praça da Cidadania: um espaço multifuncional em breve em nossa cidade!',
        desc: 'A Praça da Cidadania está prestes a se tornar uma realidade em nossa cidade! As obras já se encontram em sua fase final e em breve será oficialmente inaugurada.',
    },
    {
        id: 3,
        postImage: img3,
        title: 'Confira os números sorteados na Mega-Sena',
        desc: 'Quem acertar as seis dezenas pode levar o prêmio de R$ 12 milhões. Leva prêmio ainda quem acertar cinco ou quatro números entre os seis sorteados.',
    },
    {
        id: 4,
        postImage: img4,
        title: 'Queda de árvore na tarde de hoje (13) interdita rua no Jardim Sumarezinho, em Hortolândia',
        desc: 'Na tarde de hoje (13), uma árvore caiu na Rua Maria Zilda Salustiano de Freitas, próxima à escola Honorino Fabbri...',
    },
]

const News = () => {
    return(
        <section className='blog container section'>
                <div className="secContainer">


                    <div className="secIntro">
                            <h3  className="secTitle">Principais Notícias</h3>
                            <p> Vejas as notícias mais recentes de Hortolândia!</p>
                    </div>

                <div className='concon grid'>
                      {
                        Posts.map(({id, postImage, title, desc}) => {
                            return(
                                <div className="mainContainer grid">
                                <div className="singlePost grid">
                                    <div className="imgDiv">
                                        <img src={postImage} alt={title} />
                                    </div>
    
                                    <div className="postDetails">
                                        <h3>
                                            {title}
                                        </h3>
                                        <p> {desc} </p>
                                    </div>
    
                                    <a href="#new" className="flex readmore">
                                        Leia Mais
                                        <BsArrowRightShort className="icon-p"/>
                                    </a>
                                </div>
                            </div>
                           
                            )
                        } )
                      }
                    </div>
                </div>
        </section>
    )
}

export default News;