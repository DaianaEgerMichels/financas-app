import React from "react";
import Card from "../../components/Card/Card";
import FormGroup from "../../components/FormGroup/FormGroup";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import LancamentosTable from "../../components/LancamentosTable/LancamentosTable";
import { useState } from "react";
import * as mensagens from "../../components/Toastr/toastr.js";
import Swal from "sweetalert2";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function ConsultReleases() {
  const navigate = useNavigate();
  const [ano, setAno] = useState(0);
  const [mes, setMes] = useState(0);
  const [tipo, setTipo] = useState("");
  const [lancamentos, setLancamentos] = useState([]);

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

  function consultar(lancamentoFiltro) {
    let params = `?ano=${lancamentoFiltro.ano}`;

    if (lancamentoFiltro.mes) {
      params = `${params}&mes=${lancamentoFiltro.mes}`;
    }

    if (lancamentoFiltro.tipo) {
      params = `${params}&tipo=${lancamentoFiltro.tipo}`;
    }
    if (lancamentoFiltro.status) {
      params = `${params}&status=${lancamentoFiltro.status}`;
    }
    if (lancamentoFiltro.usuario) {
      params = `${params}&usuario=${lancamentoFiltro.usuario}`;
    }
    let url = "/api/lancamentos";
    url += params;

    return url;
  }

  const cadastrarLancamentos = () => {
    navigate("/cadastro-lancamentos");
  };

  const buscar = () => {
    if (!ano) {
      mensagens.mensagemErro("O preenchimento do campo Ano é obrigatório.");
      return false;
    }

    const usuarioLogadoString = localStorage.getItem("_usuario_logado");
    const usuarioLogado = JSON.parse(usuarioLogadoString);
    const lancamentoFiltro = {
      ano: ano,
      mes: mes,
      tipo: tipo,
      usuario: usuarioLogado.id,
    };

    let url = consultar(lancamentoFiltro);

    try {
      api
        .get(url)
        .then((response) => {
          setLancamentos(response.data);
          console.log(lancamentos);
        })
        .catch(() =>
          mensagens.mensagemAlerta(
            "Houve um problema ao buscar os lançamentos!"
          )
        );
    } catch (error) {
      mensagens.mensagemErro(error);
    }
  };

  const editar = (id) => {
    navigate(`/cadastro-lancamentos/${id}`)
  };

  const handleDelete = (idLancamento) => {
    Swal.fire({
      title: "Tem certeza que deseja deletar o lançamento?",
      text: "Caso confirme, você não poderá mais reverter está ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ce19b0",
      cancelButtonColor: "#d8a414",
      confirmButtonText: "Sim, deletar!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          if (idLancamento) {
            api.delete(`http://localhost:8080/api/lancamentos${idLancamento}`);
          }
          Swal.fire("Deletado!", "Lançamento deletado com sucesso!", "success");
        }
      })
      .catch(() =>
        mensagens.mensagemAlerta("Houve um problema ao deletar o lançamento!")
      );
  };

  const atualizarStatus = (lancamento, status)=>{
    return api.put(`/${lancamento.id}/atualiza-status`, {status})
    .then((response) => {
      const indexLancamento = lancamentos.indexOf(lancamento);
      if(indexLancamento !== -1){
        lancamento['status'] = status;
        lancamentos[indexLancamento] = lancamento;
        setLancamentos({lancamento});
      }
      mensagens.mensagemSucesso("Status de Lançamento atualizado com sucesso!");
    })
    .catch(() =>
      mensagens.mensagemAlerta(
        "Houve um problema ao atualizar o status do lançamento!"
      )
    );
  }

  return (
    <>
    <Navbar />
    <div className="container">
    <Card title="Consulta Lançamentos">
      <div className="row">
        <div className="col-md-6">
          <div className="bg-component">
            <FormGroup htmlFor="inputAno" label="Ano: *">
              <input
                type="text"
                value={ano}
                onChange={(e) => setAno(e.target.value)}
                className="form-control"
                id="inputAno"
                placeholder="Digite o Ano"
              />
            </FormGroup>
            <FormGroup htmlFor="inputMes" label="Mês: ">
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
            <FormGroup htmlFor="inputTipo" label="Tipo Lançamento: ">
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
            <button onClick={buscar} className="btn btn-primary">
              Buscar
            </button>
            <button onClick={cadastrarLancamentos} className="btn btn-danger">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-12">
          <div className="bs-component">
            <LancamentosTable
              lancamentos={lancamentos}
              deleteAction={handleDelete}
              editAction={editar}
              alterarStatus = {atualizarStatus}
            ></LancamentosTable>
          </div>
        </div>
      </div>
    </Card>
    </div>
    </>
  );
}

export default ConsultReleases;
