import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem-Vindo ao sistema de Eventos</h1>
      <Link to="/eventos">Ir para Eventos</Link>
      <h3></h3>
      <Link to="/org">Ir para Organizadores</Link>
      <h3></h3>
      <Link to="/ing">Ir para Ingressos</Link>
    </div>
  );
}
export default Home;
