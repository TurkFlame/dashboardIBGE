import React from 'react';
import '@/index.css';

const Contato: React.FC = () => {
  return (
      <div className="main-content">
        <div className="contato-container">
          <h1>Contato</h1>
          <p>
            Se você tiver alguma dúvida ou quiser saber mais sobre nossos serviços, entre em contato conosco através do formulário abaixo. 
            Estamos ansiosos para ouvir de você!
          </p>
          <form>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
            
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows={5} required></textarea>
            
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
  );
};

export default Contato;