
import Banner from "../../component/Layout/Banner";
import NavBar from "../../component/Layout/NavBar";
import Button from "../../component/Button"

//import { useEffect } from "react";
//import { useMemo } from "react";
//import { ReactDOM } from "react";

import './PessoasCadastradas.css';

import { useState } from 'react';
import axios from 'axios';


function PessoasCadastradas() {
  const [data, setData] = useState([]);


  async function getPessoas() {
   axios.get(
      "http://localhost:8080/api/pessoa"
    ).then(json => setData(json.data))
    console.log(data.data);
  }

  getPessoas();

  const renderTable = () => {
    return data.map(item => {
      return (
        <div>
        <tr>
          <td>{item.idcliente}</td>
          <td>{item.nome}</td>
          <td>{item.idade}</td>
          <td>{item.cpf}</td>
          <td>{item.email}</td>
          <td>{item.sexo}</td>
          <td>{item.rg}</td>
          <td>{item.inscricaoestadual}</td>
          <td>{item.inscricaomunicipal}</td>
          <td>{item.limitecred}</td>
          <td>{item.situacao_idsituacao}</td>
        </tr>
        </div>
      )
    })
  }


  return (

    <div>
    <NavBar></NavBar>
    <Banner h1="Pessoas Cadastradas"></Banner>
        <div>
            <table>
                  <thead>
                    <th>Id Cliente</th>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>CPF</th>
                    <th>E-Mail</th>
                    <th>Sexo</th>
                    <th>RG</th>
                    <th>Inscrição Estadual</th>
                    <th>Inscrição Municipal</th>
                    <th>Limite de Credito</th>
                    <th>Situação</th>
                  </thead>
                <tbody>{renderTable()}
                </tbody>
            </table>
        </div>

        <Button>Deletar</Button>

    </div>
  )
}




export default PessoasCadastradas;