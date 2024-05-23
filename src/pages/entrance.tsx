import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import IbgeImgNome from '@/assets/images/ibge-img-nome.png';
import Navbar from '../components/navbar';

export default function Entrance() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <div className='row'>
      <div className="container-carrousel">
        <div className="card">
          <h3 className="title">Nomes</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">


            <Link to="/page-name" className='link-invisivel'>
              {/* <img src={IbgeImgNome} alt="Imagem 1" width={300} height={200} /> */}
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="card">
          <h3 className="title">Pesquisas</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <Link to="/page-search" className='link-invisivel'>
              {/* <img src={IbgeImgNome} alt="Imagem 1" width={300} height={200} /> */}
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="card">
          <h3 className="title">Card 3</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        <div className="card">
          <h3 className="title">Card 4</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
      </div>
    </div>

  );
}
