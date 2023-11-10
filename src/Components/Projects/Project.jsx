import React from 'react';
import { connect } from 'react-redux';
import { CAMBIAR_IDIOMA } from '../../store';
import './Project.css';

const Project = ({ idioma }) => {
  return (
    <div className='project'>
      <h2 className='tituloProject'>{idioma === 'ES' ? 'Proyectos y pruebas' : 'Projects and Tests'}</h2>
      <p className='parrafoProject'>{idioma === 'ES' ? 'Aquí puedes encontrar algunos de mis proyectos, pruebas o experimentos.' : 'Here you can find some of my projects, tests, or experiments.'}</p>
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    idioma: state.idioma.idioma,
  };
};



export default connect(mapStateToProps)(Project);
