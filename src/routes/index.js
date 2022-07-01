import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Login from "../pages/Login/Login"
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home";

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/usuarios" element={<SignUp/>} />
      </Switch>
    </>
  );
}

export default Routes;