import React, { useState, useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import ImageModal from './ImageModal'; // Certifique-se de que o caminho está correto

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  useEffect(() => {
    new Splide('#image-carousel', {
      type: 'loop',
      perPage: 3, // Número de imagens por página para telas maiores
      autoplay: true,
      gap: '1rem', // Adiciona espaçamento entre as imagens
      breakpoints: {
        640: {
          perPage: 1, // Uma imagem por página em telas menores
          gap: '0.5rem', // Menor espaçamento entre imagens em telas menores
          heightRatio: 0.75, // Ajusta a altura da imagem em telas menores
        },
        768: {
          perPage: 2, // Duas imagens por página em tablets
          gap: '1rem',
          heightRatio: 0.6, // Ajusta a altura da imagem em tablets
        },
        1024: {
          perPage: 3, // Três imagens por página em desktops
        },
      },
    }).mount();
  }, []);

  const openModal = (imageSrc) => {
    setModalImageSrc(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section 
      id="carrossel" 
      className="bg-gray-100" 
      style={{ marginTop: '0', padding: '2rem' }} // Ajuste para dispositivos móveis
    >
      <p className="mb-2" style={{ color: '#daa520' }}>________________________________________</p>
      <div id="image-carousel" className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <img
                src="/poltrona.jfif" // Substitua pelo caminho correto
                alt="Imagem 1"
                className="carousel-image shadow-lg cursor-pointer"
                onClick={() => openModal('/poltrona.jfif')} // Substitua pelo caminho correto
              />
            </li>
            <li className="splide__slide">
              <img
                src="/detalhes.jfif" // Substitua pelo caminho correto
                alt="Detalhes"
                className="carousel-image shadow-lg cursor-pointer"
                onClick={() => openModal('/detalhes.jfif')} // Substitua pelo caminho correto
              />
            </li>
            <li className="splide__slide">
              <img
                src="/mesa.jfif" // Substitua pelo caminho correto
                alt="Mesa de jantar"
                className="carousel-image shadow-lg cursor-pointer"
                onClick={() => openModal('/mesa.jfif')} // Substitua pelo caminho correto
              />
            </li>
            <li className="splide__slide">
              <img
                src="/balancoloja.jfif" // Substitua pelo caminho correto
                alt="Balanço"
                className="carousel-image shadow-lg cursor-pointer"
                onClick={() => openModal('/balancoloja.jfif')} // Substitua pelo caminho correto
              />
            </li>
            <li className="splide__slide">
              <img
                src="/mesa.jfif" // Substitua pelo caminho correto
                alt="Mesa de jantar"
                className="carousel-image shadow-lg cursor-pointer"
                onClick={() => openModal('/mesa.jfif')} // Substitua pelo caminho correto
              />
            </li>
            <li className="splide__slide">
              <img
                src="/fachadaloja.jpg" // Substitua pelo caminho correto
                alt="Novo Conceito"
                className="carousel-image shadow-lg cursor-pointer"
                onClick={() => openModal('/fachadaloja.jpg')} // Substitua pelo caminho correto
              />
            </li>
            <li className="splide__slide">
              <img
                src="/poltrona2.jfif" // Substitua pelo caminho correto
                alt="Poltrona"
                className="carousel-image shadow-lg cursor-pointer"
                onClick={() => openModal('/poltrona2.jfif')} // Substitua pelo caminho correto
              />
            </li>
            <li className="splide__slide">
              <img
                src="/mesajantar.jfif" // Substitua pelo caminho correto
                alt="Mesa de Jantar"
                className="carousel-image shadow-lg cursor-pointer"
                onClick={() => openModal('/mesajantar.jfif')} // Substitua pelo caminho correto
              />
            </li>
            {/* Adicione mais imagens conforme necessário */}
          </ul>
        </div>
      </div>
      {/* Modal */}
      <ImageModal isOpen={modalOpen} imageSrc={modalImageSrc} onClose={closeModal} />
    </section>
  );
};

export default Gallery;
