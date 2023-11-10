import React from 'react';
import { connect } from 'react-redux';
import { CAMBIAR_IDIOMA } from '../../store'; // Importa CAMBIAR_IDIOMA directamente
import './Segundo.css';

const Segundo = ({ idioma,modoOscuro, dispatch}) => {
  const handleClick = () => {
    dispatch({ type: CAMBIAR_IDIOMA }); // Dispatch de la acción CAMBIAR_IDIOMA
  };
  
  return (
    <div className={`cuadradoDos ${modoOscuro ? 'modo-oscuro': ''}`}>
      <div className='container'>
      <button className={`tituloIdioma ${modoOscuro ? 'modo-oscuro-button' : ''}`} onClick={handleClick}>
          {idioma.idioma}
        </button>
        <p className={`p ${modoOscuro ? 'modo-oscuro-texto' : ''}`}><span className={`letraSelected ${modoOscuro ? 'modo-oscuro-letraSelected': ''}`}>{idioma.idioma === 'ES' ? 'ES' : 'EN'}</span> - {idioma.idioma === 'ES' ? 'EN' : 'ES'}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    idioma: state.idioma,
    modoOscuro: state.modo,
  };
};



export default connect(mapStateToProps)(Segundo);