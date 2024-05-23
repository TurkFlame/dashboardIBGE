import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import IbgeImgNome from '@/assets/images/ibge-img-nome.png';
import Navbar from '@/components/navbar';
import { ArrowBigDown } from 'lucide-react';

export default function Entrance() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0px'
  };

  return (
    <div className='container-carrousel'>
      <Navbar />
      <Slider className='slick-slider' {...settings}>
        <div className='slide'>
          <Link to="/page-name" className='link-invisivel'>
            <img src={IbgeImgNome} alt="Imagem 1" />
          </Link>
        </div>
        <div className='slide'>
          <Link to="/page-name" className='link-invisivel'>
            <img src={IbgeImgNome} alt="Imagem 1" />
          </Link>
        </div>
        <div className='slide'>
          <Link to="/page-name" className='link-invisivel'>
            <img src={IbgeImgNome} alt="Imagem 1" />
          </Link>
        </div>
        <div className='slide'>
          <Link to="/page-name" className='link-invisivel'>
            <img src={IbgeImgNome} alt="Imagem 1" />
          </Link>
        </div>
      </Slider>
    </div>
  );
}
