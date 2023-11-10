import './App.css';
import Chatbot from './Components/Chatbot/Chatbot';
import Contacto from './Components/Contacto/Contacto';
import Edad from './Components/Edad/Edad';
import Github from './Components/GitHub/Github';
import Linkedin from './Components/Linkedin/Linkedin';
import Principal from './Components/Principal/Principal';
import Project from './Components/Projects/Project';
import Segundo from './Components/Segundo/Segundo';
import Tercero from './Components/Tercero/Tercero';

function App() {
  return (
    <div className="App">

      <div className='primerFila'>
        <Principal/>
        <div className='segundaFila'>
          <Segundo/>
          <Tercero/>
        </div>
      </div>

      <div className='terceraFila'>
          <Github/>
          <Linkedin/>
          <Project />
      </div>

      <div className='cuartaFila'>
          <Edad/>
          <Edad/>
          <Project />
      </div>

      <div className='quintaFila'>
        <Contacto/>
        <div className='sextaFila'>
          <Chatbot/>
        </div>
      </div>
      

    </div>
  );
}

export default App;
