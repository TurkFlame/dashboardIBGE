import React from 'react';
import { Link } from 'react-router-dom';
import IbgeImgNome from '@/assets/images/img-nomes.png';
import IbgeImgPesquisa from '@/assets/images/img-pesquisa.png';
import IbgeImgEconomia from '@/assets/images/img-economia.png';
import '../index.css';

const Entrance: React.FC = () => {
  return (
    <div className="container">
      <Link to="/page-name" className="link-invisivel">
        <div className="grid-item">
          <img src={IbgeImgNome} alt="Imagem 1" className="image" />
          <h5 className="title">Consulta de Nomes no IBGE</h5>
        </div>
      </Link>

      <Link to="/page-search" className="link-invisivel">
        <div className="grid-item">
          <img src={IbgeImgPesquisa} alt="Imagem 1" className="image" />
          <h5 className="title">Pesquisas Realizadas pelo IBGE</h5>
        </div>
      </Link>

      <Link to="/page-economy" className="link-invisivel">
        <div className="grid-item">
          <img src={IbgeImgEconomia} alt="Imagem 1" className="image" />
          <h5 className="title">Análises Econômicas do IBGE</h5>
        </div>
      </Link>
    </div>

  );
};

export default Entrance;