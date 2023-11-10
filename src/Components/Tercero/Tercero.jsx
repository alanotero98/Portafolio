import React from 'react';
import { connect } from 'react-redux';
import { CAMBIAR_MODO } from '../../store';
import './tercero.css';

const Tercero = ({ modoOscuro, cambiarModo }) => {
  return (
    <div className={`cuadradoTres ${modoOscuro ? 'modo-oscuro' : ''}`} onClick={cambiarModo}>
      <div className={`switch ${modoOscuro ? 'modo-switch' : ''}`}>
        <div className={`circle ${modoOscuro ? 'activo' : ''}`} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modoOscuro: state.modo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cambiarModo: () => {
      dispatch({ type: CAMBIAR_MODO });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tercero);