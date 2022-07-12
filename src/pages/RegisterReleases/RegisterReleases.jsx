import React from "react";
import { useState } from "react";
import Card from "../../components/Card/Card";
import FormGroup from "../../components/FormGroup/FormGroup";
import SelectMenu from "../../components/SelectMenu/SelectMenu";

function RegisterReleases() {
  const [tipo, setTipo] = useState("");
  const [mes, setMes] = useState(0);
  const [id, setId] = useState(null);
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

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    useState({ [name]: value });
  };

  return (
    <Card title="Cadastro de Lançamentos">
      <div className="row">
        <div className="col-md-12">
          <FormGroup id="inputDescricao" label="Descrição: *">
            <input
              id="inputDescricao"
              value={descricao}
              name="descricao"
              onChange={handleChange}
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
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </FormGroup>
        </div>
        <div className="col-md-6">
          <FormGroup id="inputMes" label="Mês: *">
            <SelectMenu
              id="inputMes"
              className="form-control"
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
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </FormGroup>
        </div>
        <div className="col-md-4">
          <FormGroup id="inputTipo" label="Tipo: *">
            <SelectMenu
              id="inputTipo"
              className="form-control"
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
          <button className="btn btn-sucess">Salvar</button>
          <button className="btn btn-danger">Cancelar</button>
        </div>
      </div>
    </Card>
  );
}

export default RegisterReleases;
