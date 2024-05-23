import React, { useEffect, useState } from "react";

export default function Dashboards() {
  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-2">
          <div className="col">
            <div className="row row-cols-2">
              <div className="card">
                img
                <img
                  src="https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Econômia</h5>
                  <p className="card-text">Dashboard referente a informações de econômia dos países.</p>
                  <a href="/page-economy" className="btn btn-primary">
                    Conhecer
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row row-cols-2">
              <div className="card">
                img
                <img
                  src="https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Nomes</h5>
                  <p className="card-text">Dashboard dos nomes mais comuns no Brasil.</p>
                  <a href="/page-name" className="btn btn-primary">
                    Conhecer
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row row-cols-2">
              <div className="card">
                img
                <img
                  src="https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Pesquisa</h5>
                  <p className="card-text">Dashboard referente às pesquisas feitas no Brasil</p>
                  <a href="/page-pesquisas" className="btn btn-primary">
                    Conhecer
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row row-cols-2">
              <div className="card">
                img
                <img
                  src="https://static.vecteezy.com/ti/fotos-gratis/t2/28287431-grupo-do-multietnico-o-negocio-pessoas-dentro-a-escritorio-ai-gerado-foto.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Nada ainda</h5>
                  <p className="card-text">A colocar</p>
                  <a href="/name" className="btn btn-primary">
                    Conhecer
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
