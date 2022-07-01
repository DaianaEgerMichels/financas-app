import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cadastrar" element={<SignUp/>} />
      </Switch>
    </>
  );
}

export default Routes;