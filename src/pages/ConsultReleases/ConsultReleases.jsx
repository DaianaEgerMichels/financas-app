import React from "react";
import Card from "../../components/Card/Card";
import FormGroup from "../../components/FormGroup/FormGroup";
import SelectMenu from "../../components/SelectMenu/SelectMenu";
import LancamentosTable from "../../components/LancamentosTable/LancamentosTable";

function ConsultReleases() {
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

  const lancamentos =[
    {id: 1, descricao: 'Salário', valor: 2850, mes: 6, tipo: 'Receita', status: 'Efetivado'},
  ];

  return (
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
                aria-describedby="emailHelp"
                placeholder="Digite o Ano"
              />
            </FormGroup>
            <FormGroup htmlFor="inputMes" label="Mês: ">
              <SelectMenu
                id="inputMes"
                className="form-control"
                lista={meses}
              />
            </FormGroup>
            <FormGroup htmlFor="inputTipo" label="Tipo Lançamento: ">
              <SelectMenu
                id="inputTipo"
                className="form-control"
                lista={tipos}
              />
            </FormGroup>
            <button className="btn btn-sucess">Buscar</button>
            <button className="btn btn-danger">Cadastrar</button>
          </div>
        </div>
      </div>
      <br/>
      <div className="row">
        <div className="col-md-12">
          <div className="bs-component">
            <LancamentosTable rows={lancamentos}></LancamentosTable>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ConsultReleases;
