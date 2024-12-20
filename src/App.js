import Login from "./components/Login/index";
import MainMenu from "./components/MainMenu/index";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Page404 from "./components/ErrorPage/page404"
import MenuItem from "./components/MenuItem";
import SearchVoucher from "./components/Page/SearchVoucher";
import AddMainAccount from "./components/Page/AddMainAccount";
import RecordVoucher from "./components/Page/RecordVoucher";
import MenuFunction from "./components/MenuFunction";
import ImportMainAccount from "./components/ImportMainAccount";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/MainMenu" element={<MainMenu/>}></Route>
        <Route path="/SearchVoucher" element={<SearchVoucher/>}></Route>
        <Route path="/AddMainAccount" element={<AddMainAccount/>}></Route>
        <Route path="/RecordVoucher" element={<RecordVoucher/>}></Route>
        <Route path="/importMainAccount" element={<ImportMainAccount/>}></Route>
        <Route path="*" element={<MenuFunction/>}></Route>
      </Routes>
    </>
  );
}

export default App;
