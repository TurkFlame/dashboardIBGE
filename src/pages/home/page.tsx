import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style.css';

export default function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Adiciona a propriedade autoplay para fazer o carrossel se mover automaticamente
    autoplaySpeed: 5000 // Define o intervalo de tempo em milissegundos (5 segundos)
  };

  return (
    <div className='carrousel'>
      <Slider {...settings} style={{ width: '600px', height: '500px' }}>
        <div>
          <img src="image1.jpg" alt="Imagem 1" />
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
