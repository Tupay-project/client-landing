import { FC } from "react";
import { Content } from "../../../../features/layout/components/content";

const Statistics: FC = () => {
  return (
    <>
      <Content>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-outline-primary">Seleccionar días</button>
          <button className="btn btn-outline-secondary">Filtro</button>
        </div>
        <div className="text-center mb-3">
          <h4>Hoy 5 / 07 /2024</h4>
        </div>
        <div className="card text-center mb-3">
          <div className="card-body">
            <h5 className="card-title">SALDO</h5>
            <p className="card-text text-primary" style={{ fontSize: "2rem" }}>$ 0,00</p>
          </div>
        </div>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Tasa Representativa del Mercado</h5>
            <p className="card-subtitle mb-2 text-muted">(TRM - Peso por dólar)</p>
            <p className="card-text">
              <span className="text-primary" style={{ fontSize: "1.0rem" }}>1 USD</span> = 
              <span className="text-warning" style={{ fontSize: "0.5" }}> 4,096.09 COP</span>
            </p>
            <small className="text-muted">Cuatro Mil Noventa y Seis Pesos Con Nueve Centavos</small>
          </div>
        </div>
      </Content>
    </>
  );
};

export { Statistics };
