import { useState, useEffect } from "react";
// Imports para criação de tabela
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
// TableHead é onde colocamos os titulos
import TableHead from "@mui/material/TableHead";
// TableBody é onde colocamos o conteúdo
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import api from "../axios/axios";
import {Button} from "@mui/material";
import { Link } from "react-router-dom";

function Ingressos() {
  const [ingresso, setIngressos] = useState([]);

  async function getAllIngs() {
    //Chamada da Api
    await api.getAllIngs().then(
      (response) => {
        console.log(response.data.ingressos);
        setIngressos(response.data.ingressos);
      },
      (error) => {
        console.log("Erro", error);
      }
    );
  }

  const listIngressos = ingresso.map((ingresso) => {
    return (
      <TableRow key={ingresso.id_ingresso}>
        <TableCell align="center">{ingresso.preco}</TableCell>
        <TableCell align="center">{ingresso.tipo}</TableCell>

       
      </TableRow>
    );
  });

  useEffect(() => {
    //Aqui devemos criar ou chamar uma função
    getAllIngs();
  }, []);
  return (
    <div>
      <h5>Lista de Ingressos</h5>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "brown", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Tipo</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>{listIngressos}</TableBody>
        </Table>
      </TableContainer>
      <Button fullWidth variant="contained" component={Link} to="/">
        SAIR
      </Button>
    </div>
  );
}

export default Ingressos;
