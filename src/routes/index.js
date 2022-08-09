import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import ConsultReleases from "../pages/ConsultReleases/ConsultReleases";
import RegisterReleases from "../pages/RegisterReleases/RegisterReleases";

// const isUsuarioAutenticado = ()=>{
//   const usuarioLogado = localStorage.getItem("_usuario_logado");
//     return usuarioLogado && usuarioLogado.id;
// }

// function RotaAutenticada({component: Component, ...props}){
//   return (
//     <Route {...props} render={(componentProps)=>{
//         if(isUsuarioAutenticado()){
//           return(
//             <Component {...componentProps}/>
//           )
//         }else{
//           return(
//             <Navigate to={{pathname: '/login', state: {from: componentProps.location}}}/>
//           )
//         }
//     }}/>
//   )
// }

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/usuarios" element={<SignUp/>} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/consulta-lancamentos" element={<ConsultReleases/>} />
        <Route exact path="/cadastro-lancamentos" element={<RegisterReleases/>} />
        <Route exact path="/cadastro-lancamentos/:id" element={<RegisterReleases/>} />
      </Switch>
    </>
  );
}

export default Routes;