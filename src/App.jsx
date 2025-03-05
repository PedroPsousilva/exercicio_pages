import { BrowserRouter, Routes, Route } from "react-router-dom";

import Eventos from "./pages/Eventos";
import Home from "./pages/Home";
import Organizadores from "./pages/Organizadores";
import Ingressos from "./pages/Ingressos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ing" element={<Ingressos />} /> 
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/org" element={<Organizadores />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
