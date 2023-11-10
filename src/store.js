import { configureStore } from '@reduxjs/toolkit';

// Acción
export const CAMBIAR_IDIOMA = 'CAMBIAR_IDIOMA';
export const CAMBIAR_MODO = 'CAMBIAR_MODO';

// Reductor
const initialState = {
  idioma: 'ES',
};

export const idiomaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAMBIAR_IDIOMA:
      return {
        ...state,
        idioma: state.idioma === 'ES' ? 'EN' : 'ES',
      };
    default:
      return state;
  }
};

// Reductor para el modo oscuro/claro
export const modoReducer = (state = false, action) => {
    switch (action.type) {
      case CAMBIAR_MODO:
        return !state;
      default:
        return state;
    }
  };

// Store
const store = configureStore({
  reducer: {
    idioma: idiomaReducer,
    modo: modoReducer,
    // Puedes agregar otros reductores aquí si los tienes
  },
});

export default store;

