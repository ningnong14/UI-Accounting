import React, { useState, useEffect } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import Sidebar from "../SidebarTab";
import { Box, CssBaseline } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import MenuItem from "../MenuItem";
import { functionName } from "../../Model/MainData";

export default function Index() {
  const [nameFunctionAccounting,setFunctionName] = useState(functionName) //MainData เก็บชื่อ function ในการ gen
  return (
    <>
      <CssBaseline />
      <div className="app">
        <Sidebar functionName={nameFunctionAccounting}/>
        <main className="content">
          <MenuItem functionName={nameFunctionAccounting}/>
        </main>
      </div>
    </>
  );
}
