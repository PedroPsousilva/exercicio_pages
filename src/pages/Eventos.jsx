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

function Eventos() {
  const [eventos, setEventos] = useState([]);

  async function getEventos() {
    //Chamada da Api
    await api.getEventos().then(
      (response) => {
        console.log(response.data.eventos);
        setEventos(response.data.eventos);
      },
      (error) => {
        console.log("Erro", error);
      }
    );
  }

  const listEventos = eventos.map((evento) => {
    return (
      <TableRow key={evento.id_evento}>
        <TableCell align="center">{evento.nome}</TableCell>
        <TableCell align="center">{evento.descricao}</TableCell>
        <TableCell align="center">{evento.data_hora}</TableCell>
        <TableCell align="center">{evento.local}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    //Aqui devemos criar ou chamar uma função
    getEventos();
  }, []);
  return (
    <div>
      <h5>Lista de Eventos</h5>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "brown", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Descrição</TableCell>
              <TableCell align="center">Data_hora</TableCell>
              <TableCell align="center">Local</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{listEventos}</TableBody>
        </Table>
      </TableContainer>
      <Button fullWidth variant="contained" component={Link} to="/">
        SAIR
      </Button>
    </div>
  );
}

export default Eventos;
