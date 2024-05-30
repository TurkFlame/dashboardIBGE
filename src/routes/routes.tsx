import React from "react";
import { Routes, Route } from "react-router-dom";
import Entrance from "../pages/entrance";
import Economy from "../pages/economy";
import PageName from "../pages/pageName";
import PageSearch from "../pages/pageSearch";
import SobreNos from '@/pages/sobreNos';
import Contato from '@/pages/contato';
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Entrance />} />
      <Route path="/page-name" element={<PageName />} />
      <Route path="/page-search" element={<PageSearch />} />
      <Route path="/page-economy" element={<Economy />} />{" "}
      <Route path='/sobre-nos' element={<SobreNos/>}/>
      <Route path='/contato' element={<Contato/>}/>
    </Routes>
  );
}
