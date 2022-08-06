import React from "react";
import { Routes as Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import ConsultReleases from "../pages/ConsultReleases/ConsultReleases";
import RegisterReleases from "../pages/RegisterReleases/RegisterReleases";

const isUsuarioAutenticado = ()=>{
    return false;
}

function RotaAutenticada({component: Component, ...props}){
  return (
    <Route {...props} render={(componentProps)=>{
        if(isUsuarioAutenticado()){
          return(
            <Component {...componentProps}/>
          )
        }else{
          return(
            <Redirect to={{pathname: '/login', state: {from: componentProps.location}}}/>
          )
        }
    }}/>
  )
}

function Routes() {
  return (
    <>
      <Switch>
        <RotaAutenticada exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/usuarios" element={<SignUp/>} />
        <RotaAutenticada exact path="/consulta-lancamentos" element={<ConsultReleases/>} />
        <RotaAutenticada exact path="/cadastro-lancamentos" element={<RegisterReleases/>} />
        <RotaAutenticada exact path="/cadastro-lancamentos/:id" element={<RegisterReleases/>} />
      </Switch>
    </>
  );
}

export default Routes;