import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IbgeImgNome from '@/assets/images/ibge-img-nome.png';

export default function Entrance() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
      <div className='carrousel'>
        <Slider className='slick-slider' {...settings}>
          <div className='slide'>
            <img src={IbgeImgNome} alt="Imagem 1" width={300} height={200}/>
          </div>
          <div>
            <img src="image2.jpg" alt="Imagem 2" />
          </div>
          <div>
            <img src="image3.jpg" alt="Imagem 3" />
          </div>
        </Slider>
      </div>
  );
}
