import React from "react";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import FormGroup from "../../components/FormGroup/FormGroup";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import {
  mensagemAlerta,
  mensagemErro,
  mensagemSucesso,
} from "../../components/Toastr/toastr.js";
import { useNavigate, useParams } from "react-router";
import api from "../../utils/api";
import Navbar from "../../components/Navbar/Navbar";

function RegisterReleases() {
  const navigate = useNavigate();
  const params = useParams();
  const [tipo, setTipo] = useState("");
  const [mes, setMes] = useState(0);
  const [ano, setAno] = useState("");
  const [valor, setValor] = useState("");
  const [status, setStatus] = useState("");
  const [descricao, setDescricao] = useState("");

  const meses = [
    { label: "SELECIONE...", value: "" },
    { label: "JANEIRO", value: 1 },
    { label: "FEVEREIRO", value: 2 },
    { label: "MARÇO", value: 3 },
    { label: "ABRIL", value: 4 },
    { label: "MAIO", value: 5 },
    { label: "JUNHO", value: 6 },
    { label: "JULHO", value: 7 },
    { label: "AGOSTO", value: 8 },
    { label: "SETEMBRO", value: 9 },
    { label: "OUTUBRO", value: 10 },
    { label: "NOVEMBRO", value: 11 },
    { label: "DEZEMBRO", value: 12 },
  ];

  const tipos = [
    { label: "SELECIONE...", value: "" },
    { label: "DESPESA", value: "DESPESA" },
    { label: "RECEITA", value: "RECEITA" },
  ];

  const validarCampos = () => {
    const mensagens = [];

    if (!descricao) {
      mensagens.push("Informe uma descrição para o lançamento.");
    } else if (!ano) {
      mensagens.push("Ano é um campo obrigatório.");
    } else if (!mes) {
      mensagens.push("Mês é um campo obrigatório.");
    } else if (!valor || valor === 0) {
      mensagens.push("Informe o valor do lançamento");
    } else if (!tipo) {
      mensagens.push("Informe o tipo do seu lançamento.");
    }
    return mensagens;
  };

  const salvarLancamento = (e) => {
    e.preventDefault();
    const mensagens = validarCampos();

    if (mensagens && mensagens.length > 0) {
      mensagens.forEach((mensagem, index) => {
        mensagemErro(mensagem);
      });
      return false;
    }

    try {
      const usuarioLogadoString = localStorage.getItem('_usuario_logado')
      const usuarioLogado = JSON.parse(usuarioLogadoString)

      if(params.id){
        api.put(`/api/lancamentos/${params.id}`, {usuario: usuarioLogado.id,
          descricao: descricao,
          ano: ano,
          mes: mes,
          tipo: tipo,
          valor: valor,
          status: status,}).then(() => {
            mensagemSucesso("Lançamento atualizado!");
          navigate("/consulta-lancamentos");
          })
          .catch((erro) => {
             mensagemErro(erro.response.data);
          });
      } else {
        api
        .post("/api/lancamentos", {
          usuario: usuarioLogado.id,
          descricao: descricao,
          ano: ano,
          mes: mes,
          tipo: tipo,
          valor: valor,
          status: 'PENDENTE'
        })
        .then(() => {
          mensagemSucesso("Lançamento cadastrado com sucesso!");
          navigate("/consulta-lancamentos");
        })
        .catch((erro) => mensagemErro(erro.response.data));
      }

    } catch (error) {
      mensagemErro(error);
    }
  };

  const usuarioLoggedString = localStorage.getItem("_institution_logged");
  const usuarioLogged = JSON.parse(usuarioLoggedString);

    if (usuarioLogged.id === null || usuarioLogged.id === 0) {
      mensagemErro("Houve um erro ao buscar os lançamentos");
    }

  useEffect(() => {
    try {
        if(params.id){         
      api
        .get(`/api/lancamentos/${params.id}`)
        .then((response) => {
          if(response.data.length < 1){
            mensagemAlerta("Não há lançametos registrados!")
            navigate("/home")
          }
        let result = response.data;
        console.log(result)

        setDescricao(result.descricao)
        setAno(result.ano)
        setMes(result.mes)
        setTipo(result.tipo)
        setValor(result.valor)
        setStatus(result.status)
    })
        .catch((erro) =>{
          mensagemAlerta("Houve um problema ao buscar o lançamento!");
          mensagemErro(erro.response.data);}
        );}
    } catch (error) {
      mensagemErro(error);
    }
  }, [params, navigate]); 



  const cancelar = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
    <Navbar />
    <div className="container">
    <Card title="Cadastro de Lançamentos">
      <div className="row">
        <div className="col-md-12">
          <FormGroup id="inputDescricao" label="Descrição: *">
            <input
              id="inputDescricao"
              value={descricao}
              name="descricao"
              onChange={(e) => setDescricao(e.target.value)}
              type="text"
              className="form-control"
            />
          </FormGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <FormGroup id="inputAno" label="Ano: *">
            <input
              id="inputAno"
              value={ano}
              name="ano"
              onChange={(e) => setAno(e.target.value)}
              type="text"
              className="form-control"
            />
          </FormGroup>
        </div>
        <div className="col-md-6">
          <FormGroup id="inputMes" label="Mês: *">
            <SelectMenu
              id="inputMes"
              className="nav-link dropdown-toggle  btn-outline-info form-control"
              data-bs-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              lista={meses}
              value={mes}
              onChange={(e) => setMes(e.target.value)}
            />
          </FormGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <FormGroup id="inputValor" label="Valor: *">
            <input
              id="inputValor"
              value={valor}
              name="valor"
              onChange={(e) => setValor(e.target.value)}
              type="text"
              className="form-control"
            />
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup id="inputTipo" label="Tipo: *">
            <SelectMenu
              id="inputTipo"
              className="nav-link dropdown-toggle  btn-outline-info form-control"
              data-bs-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              lista={tipos}
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            />
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup id="inputStatus" label="Status: ">
            <input
              id="inputStatus"
              type="text"
              className="form-control"
              value={status}
              name="status"
              disabled
            />
          </FormGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <button onClick={salvarLancamento} className="btn btn-primary">
            Salvar
          </button>
          <button onClick={cancelar} className="btn btn-danger">
            Cancelar
          </button>
        </div>
      </div>
    </Card>
    </div>
    </>
  );
}

export default RegisterReleases;
