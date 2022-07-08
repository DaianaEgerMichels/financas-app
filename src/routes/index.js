import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";
import ConsultReleases from "../pages/ConsultReleases/ConsultReleases";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/usuarios" element={<SignUp/>} />
        <Route exact path="/consulta-lancamentos" element={<ConsultReleases/>} />
      </Switch>
    </>
  );
}

export default Routes;