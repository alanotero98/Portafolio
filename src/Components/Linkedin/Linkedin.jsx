import React from 'react';
import './Linkedin.css';
import { connect } from 'react-redux';
import { TfiLinkedin } from 'react-icons/tfi';
import { TbExternalLink } from 'react-icons/tb';

const Linkedin = ({modoOscuro}) => {
  return (
    <div className='linkedin'>
        <a href='https://www.linkedin.com/in/alan-otero-688a59165/'
        target="_blank"
         className={`link ${modoOscuro ? 'modo-oscuro-link': ''}`}>
        <TbExternalLink/>
        </a>
        <TfiLinkedin className={`logo ${modoOscuro ? 'modo-oscuro-logo': ''}`}/>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      modoOscuro: state.modo,
    };
  };
  

  export default connect(mapStateToProps)(Linkedin);