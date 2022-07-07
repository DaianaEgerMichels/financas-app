import React, { useState } from "react";
import Card from "../../components/Card/Card";
import FormGroup from "../../components/FormGroup/FormGroup";
import { useNavigate } from "react-router";
import api from "../../utils/api";

import {
  mensagemErro,
  mensagemSucesso,
} from "../../components/Toastr/toastr.js";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const validarCampos = ()=>{
    const mensagens = []

    if (!name) {
      mensagens.push("Nome é um campo obrigatório.");
     
    } else if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      mensagens.push("Informe um email válido.");
      
    } 
    else if (!password || !confirmPassword) {
      mensagens.push("Senha é um campo obrigatório. Digite a senha duas vezes para confirmar.");
      
    } else if (confirmPassword !== password) {
      mensagens.push("As senhas devem ser iguais.");
      
    }
    return mensagens;
  }

  const cadastrar = (e) => {
    e.preventDefault();
    const mensagens = validarCampos();

    if(mensagens && mensagens.length >0){
      mensagens.forEach((mensagem, index)=>{
        mensagemErro(mensagem)
      });
      return false;
    }

    try {
    
      
      api
        .post("/api/usuarios", {
          nome: name,
          email: email,
          senha: password,
        })
        .then(() => {
          mensagemSucesso(
            "Usuário cadastrado com sucesso! Faça login para acessar o sistema!"
          );
          navigate("/login");
        })
        .catch((erro) => mensagemErro(erro.response.data));
    } catch (error) {
      mensagemErro(error);
    }
  };

  return (
    <Card title="Cadastro de Usuário">
      <div className="row">
        <div className="col-lg-12">
          <div className="bs-component">
            <FormGroup label="Nome: *" htmlFor="inputNome">
              <input
                type="text"
                id="inputNome"
                value={name}
                name="nome"
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Digite aqui o seu Nome"
              />
            </FormGroup>
            <FormGroup label="Email: *" htmlFor="inputEmail">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="inputEmail"
                placeholder="Digite aqui o seu Email"
              />
            </FormGroup>
            <FormGroup label="Senha: *" htmlFor="inputPassword">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="inputPassword"
                placeholder="Digite aqui a sua Senha"
              />
            </FormGroup>
            <FormGroup
              label="Confirmar Senha: *"
              htmlFor="inputConfirmPassword"
            >
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control"
                id="inputConfirmPassword"
                placeholder="Confirme aqui a sua Senha"
              />
            </FormGroup>
            <button onClick={cadastrar} className="btn btn-primary">
              Cadastrar
            </button>
            <button onClick={handleClick} className="btn btn-warning">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default SignUp;
