import React from 'react';
import { connect } from 'react-redux';
import { FaRegHandPeace } from 'react-icons/fa';
import './Principal.css';

const Principal = ({ idioma, modoOscuro }) => {
  const textoEspañol = {
    titulo: '¡Hola, Soy Alan Otero!',
    parrafo: 'Soy desarrollador full stack con experiencia tanto en tecnologías de desarrollo front-end como de back-end. Mi pasión está en el desarrollo front-end y estoy buscando mi primera oportunidad laboral en este campo. Estoy entusiasmado por contribuir y crecer en el mundo del desarrollo web.',
  };

  const textoIngles = {
    titulo: 'Hello, I\'m Alan Otero!',
    parrafo: 'I am a full stack developer with experience in both front-end and back-end development technologies. My passion lies in front-end development, and I am seeking my first job opportunity in this field. I am excited to contribute and grow in the world of web development.',
  };

  const textoMostrar = idioma === 'ES' ? textoEspañol : textoIngles;

  return (
    <div className={`cuadradoUno ${modoOscuro ? 'modo-oscuro' : ''}`}>
      <div className='contenido'>
        <h2 className={`tituloMio ${modoOscuro ? 'modo-oscuro-texto' : ''}`}>
          <FaRegHandPeace className={`mano ${modoOscuro ? 'modo-oscuro-texto' : ''}`}/> {textoMostrar.titulo}
        </h2>
        <p className={`parrafo ${modoOscuro ? 'modo-oscuro-texto' : ''}`}>
          {textoMostrar.parrafo}
        </p>
      </div>
      <div className='imagen'>
        <img src='' alt="yo" className='imagen' />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    idioma: state.idioma.idioma,
    modoOscuro: state.modo,
  };
};

export default connect(mapStateToProps)(Principal);
