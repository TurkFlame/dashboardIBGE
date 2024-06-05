import React from 'react';
import '../index.css';

const SobreNos: React.FC = () => {
  return (
    <div className="main-content mt-5">
      <div className="sobre-nos-container">
        <h3>Sobre Nós</h3>
        <hr className='mt-1' />
        <p className='mb-3'>
          Projeto feito pelos alunos do 5° Periodo de engenharia de software,
          utilizando a API gratuita do IBGE e trazendo dados em formas de gráficos e
          tabelas para demonstração dessas pesquisas.
        </p>
      </div>

      <div className="sobre-nos-container">
        <section>
          <h3>Nossa História</h3>
          <hr className='mt-1' />
          <p className='mb-3'>
            Juntando os alunos aos poucos, foi-se criando uma equipe incrivel e que se completa em todas
            as areas, fazendo possivel entregar esse projeto incrivel que estamos vendo.
          </p>
        </section>
      </div>

      <div className="sobre-nos-container">
        <section>
          <h3>Nossos Valores</h3>
          <hr className='mt-1' />
          <p>
            Nós como Engenheiros de software sempre estamos empenhados para entregar o melhor projeto,
            por isso prezamos por:
          </p>
          <ul className='mb-3'>
            <li><b>Busca constante</b> por novas soluções e tecnologias para aprimorar nossos projetos.</li>
            <li><b>Garantimos</b> que nossos produtos atendam aos mais altos padrões de excelência.</li>
            <li><b>Desenvolvemos software</b> com foco na eficiência e uso responsável dos recursos.</li>
            <li><b>Atuamos com transparência</b> e ética em todas as etapas do desenvolvimento.</li>
            <li><b>Contribuímos para a sociedade</b> através de projetos que fazem a diferença.</li>
          </ul>
        </section>
      </div>

      <div className="sobre-nos-container">
        <section>
          <h3>Conheça Nossa Equipe</h3>
          <hr className='mt-1' />
          <p className='mb-3'>
            Nossa equipe é composta por cinco alunos do Centro universitário Campo Real
            apaixonados pelo que fazem.
          </p>

          <ul className='mb-3'>
            <li><b>Bryan Mernick</b></li>
            <li><b>Gabriel Vinicius Antunes</b></li>
            <li><b>Luiz Felipe Marcondes</b></li>
            <li><b>Ives Eduardo de Lara Kracoki</b></li>
            <li><b>Weslley Cesar Zampier</b></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SobreNos;
