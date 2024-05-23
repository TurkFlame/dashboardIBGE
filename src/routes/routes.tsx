import React from "react";
import { Routes, Route } from "react-router-dom";
import Entrance from "../pages/entrance";
import Economy from "../pages/economy";
import PageName from "../pages/pageName";
import PageSearch from "../pages/pageSearch";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import Dashboards from "../pages/dashboards";
import Private from "./private";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Entrance />} />
      <Route path="/page-name" element={<PageName />} />
      <Route path="/page-search" element={<PageSearch />} />
      <Route path="/signin" element={<SignIn />} />{" "}
      {/* Tela para ir para o login */}
      <Route path="/signup" element={<SignUp />} />{" "}
      {/* Tela para ir para o cadastro */}
      <Route path="/dashboards" element={<Dashboards />} /> {/**/}
      <Route path="/page-economy" element={<Economy />} />{" "}
      {/* Tela para cada dashboard */}
    </Routes>
  );
}
