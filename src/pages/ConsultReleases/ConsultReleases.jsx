import React from 'react'
import Card from "../../components/Card/Card";
import FormGroup from '../../components/FormGroup/FormGroup';
import SelectMenu from '../../components/SelectMenu/SelectMenu';

function ConsultReleases() {

  const lista = [
    {label: 'SELECIONE...', value:''},
    {label: 'JANEIRO', value: 1},
    {label: 'FEVEREIRO', value: 2},
    {label: 'MARÇO', value: 3},
    {label: 'ABRIL', value: 4},
    {label: 'MAIO', value: 5},
    {label: 'JUNHO', value: 6},
    {label: 'JULHO', value: 7},
    {label: 'AGOSTO', value: 8},
    {label: 'SETEMBRO', value: 9},
    {label: 'OUTUBRO', value: 10},
    {label: 'NOVEMBRO', value: 11},
    {label: 'DEZEMBRO', value: 12},
  ]

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
                    <FormGroup htmlFor="inputMes" label="Mês: *">
                      <SelectMenu className="form-control" lista={lista}/>
                    </FormGroup>
                </div>
            </div>
        </div>
    </Card>
  )
}

export default ConsultReleases;