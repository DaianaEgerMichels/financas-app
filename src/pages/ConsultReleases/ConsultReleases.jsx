import React from 'react'
import Card from "../../components/Card/Card";
import FormGroup from '../../components/FormGroup/FormGroup';

function ConsultReleases() {
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
                    
                    </FormGroup>
                </div>
            </div>
        </div>
    </Card>
  )
}

export default ConsultReleases;