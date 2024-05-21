import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";

export default function Dashboards() {
  useEffect(() => {}, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="container text-center">
        <div className="row row-cols-2">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
  );
}
