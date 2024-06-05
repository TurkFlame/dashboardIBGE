import React from 'react';
import '@/index.css';

const Contato: React.FC = () => {
  return (
      <div className="main-content content-center">
        <div className="contato-container">
          <h3>Contato</h3>
          <hr></hr>
          <p>
            Se você tiver alguma dúvida ou alguma sugestão, entre em contato conosco através do formulário abaixo. 
            Estamos ansiosos para ouvir de você!
          </p>
          <form>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" placeholder='Informe seu nome' required />
            
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required placeholder='Informe seu E-mail de contato' />
            
            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" placeholder='Informe sua mensagem'  required></textarea>
            
            <button className="btn btn-primary" type="submit">Enviar</button>
          </form>
        </div>
      </div>
  );
};

export default Contato;