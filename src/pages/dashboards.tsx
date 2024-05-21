import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";

export default function Dashboards() {
  useEffect(() => {}, []);

  return (
    <div>
      <Navbar></Navbar>
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
                  <h5 className="card-title">Nomes</h5>
                  <p className="card-text">Api de nomes</p>
                  <a href="#" className="btn btn-primary">
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
                  <p className="card-text">Api de nomes</p>
                  <a href="#" className="btn btn-primary">
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
                  <p className="card-text">Api de nomes</p>
                  <a href="#" className="btn btn-primary">
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
                  <p className="card-text">Api de nomes</p>
                  <a href="#" className="btn btn-primary">
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
