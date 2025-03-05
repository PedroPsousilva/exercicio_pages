import { Link } from "react-router-dom";

function CriarEvento() {
  return (
    <div>
      <h1>Crie um evento</h1>
      <Link to="/eventos">Ir para Lista de Eventos</Link>
    </div>
  );
}

export default CriarEvento;
