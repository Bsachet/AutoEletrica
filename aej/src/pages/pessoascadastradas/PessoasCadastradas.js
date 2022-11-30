
import Banner from "../../component/Layout/Banner";
import NavBar from "../../component/Layout/NavBar";
//import Button from '../../component/Button';

import { useEffect } from "react";
import { useMemo } from "react";
import { ReactDOM } from "react";

import './PessoasCdastradas.css';
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
        <tr>
          <th>{item.idcliente}</th>
          <th>{item.nome}</th>
          <th>{item.idade}</th>
          <th>{item.cpf}</th>
          <th>{item.email}</th>
          <th>{item.sexo}</th>
          <th>{item.rg}</th>
          <th>{item.inscricaoestadual}</th>
          <th>{item.inscricaomunicipal}</th>
          <th>{item.limitecred}</th>
          <th>{item.situacao_idsituacao}</th>
        </tr>
      )
    })
  }


  return (

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


  )
}




export default PessoasCadastradas;