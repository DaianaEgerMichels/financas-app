import React, { useState } from "react";
import Card from "../../components/Card/Card";
import FormGroup from "../../components/FormGroup/FormGroup";

export default function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const login = ()=>{
  console.log("Entrei aqui")
  console.log(email)
  console.log(password)
}
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                        <input
                          type="email"
                          value={email}
                          onChange={(e)=> setEmail(e.target.value)}
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Digite o Email"
                        />
                      </FormGroup>
                      <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                        <input
                          type="password"
                          value={password}
                          onChange={(e)=> setPassword(e.target.value)}
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </FormGroup>
                      <button onClick={login} className="btn btn-success">Entrar</button>
                      <button className="btn btn-primary">Cadastrar</button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
