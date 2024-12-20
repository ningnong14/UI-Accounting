import ParseExcel from "../ParseExcel";
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Badge,
  TextField,
  Button,
} from "@mui/material";
import TemplateMainAcc from "../TemplateMainAcc";
import SideBarTab from "../SidebarTab";
import { functionName } from "../../Model/MainData";
import GenTableInput from "../GenTableInput";
import { headerTableMainAccount } from "../../Model/MainData";
import MenuFunction from "../MenuFunction";
export default function AddMainAccount(props) {
  return (
    <>
      <div className="addMainAccount">
        <SideBarTab functionName={functionName}/>
        <MenuFunction/>
      </div>
      {/* <div>
        <GenTableInput dataHeader={headerTableMainAccount} />
      </div> */}
    </>
  );
}
