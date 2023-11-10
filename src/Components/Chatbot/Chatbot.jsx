import React, { useState } from 'react';
import './Chatbot.css';
import img from './images.jpg';
import { sendMessageToChatGPT } from './sendMessageToChatGPT'; // Asegúrate de importar la función correctamente
import {AiOutlineSend} from 'react-icons/ai'

const Chatbot = () => {
    const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSubmit = async () => {
    if (inputMessage.trim() === '') {
      return; // No envía mensajes vacíos
    }

    setMessages([...messages, { text: inputMessage, isUser: true }]);
    setInputMessage(''); // Limpiar el input después de enviar el mensaje

    const response = await sendMessageToChatGPT(inputMessage);
    setMessages(prevMessages => [...prevMessages, { text: response, isUser: false }]);

  };

  return (
    <div className='chatbot'>
      <img src={img} alt="imagenMia" className='fotoMia' />
      <h2 className='tituloChat'>Soy el chatbot de Alan</h2>

      <div className='chat-container'>
        {messages.map((message, index) => (
          <div key={index} className={message.isUser ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>

      <div className='divInput'>
        <input
          type="text"
          className='inputChatbot'
          placeholder="Chatea conmigo..."
          value={inputMessage}
          onChange={handleInputChange}
        />
        <button className='submitButton' onClick={handleSubmit}>
          <AiOutlineSend className='icon'/>
        </button>
       </div>
    </div>
  );
};

export default Chatbot;
