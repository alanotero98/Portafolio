import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div className='contacto'>
       <div className='informacionMia'>
        <h2>Contacto</h2>
        <p>Whatsapp</p>
        <p>dni</p>
        <p>email</p>
       </div>
       <div className='form'>
        <h2>Email</h2>
        <div className='inputs'>
          <div className='input-group'>
            <label htmlFor='nombre'>Nombre</label>
            <input type='text' id='nombre' name='nombre' />
          </div>
          <div className='input-group'>
            <label htmlFor='apellido'>Apellido</label>
            <input type='text' id='apellido' name='apellido' />
          </div>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' />
          </div>
          <div className='input-group'>
            <label htmlFor='Phone'>Phone</label>
            <input type='text' id='Phone' name='Phone' />
          </div>
          <div className='input-group full-width'>
            <label htmlFor='mensaje'>Mensaje</label>
            <input type='text' id='mensaje' name='mensaje' />
          </div>
        </div>
        <button>submit</button>
      </div>
    </div>
  )
}

export default Contacto