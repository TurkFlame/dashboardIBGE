import React from 'react';
import { Link } from 'react-router-dom';
import IbgeImgNome from '@/assets/images/ibge-img-nome.png';
import IbgeImgPesquisa from '@/assets/images/ibge-img-pesquisa.png';
import IbgeImgEconomia from '@/assets/images/ibge-img-economia.png';
import '../index.css';

export default function Entrance() {
  return (
    <>
      <div className='container'>
        <div className='grid-item'>
          <Link to="/page-name" className='link-invisivel'>
            <div className='image-title-container'>
              <img src={IbgeImgNome} alt="Imagem 1" className='image' />
            </div>
            <h3 className='title'>PESQUISAS NOMES IBGE</h3>
          </Link>
        </div>
        <div className='grid-item'>
          <Link to="/page-search" className='link-invisivel'>
            <div className='image-title-container'>
              <img src={IbgeImgPesquisa} alt="Imagem 1" className='image' />
            </div>
            <h3 className='title'>PESQUISAS FEITAS DO IBGE</h3>
          </Link>
        </div>
        <div className='grid-item'>
          <Link to="/page-economy" className='link-invisivel'>
            <div className='image-title-container'>
              <img src={IbgeImgEconomia} alt="Imagem 1" className='image' />
            </div>
            <h3 className='title'>PESQUISAS ECONOMIA IBGE</h3>
          </Link>
        </div>
      </div>
    </>
  );
}