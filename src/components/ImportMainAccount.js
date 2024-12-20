import ParseExcel from "./ParseExcel";
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
import TemplateMainAcc from "./TemplateMainAcc";
import SideBarTab from "./SidebarTab";
import { functionName } from "../Model/MainData";

export default function ImportMainAccount(props) {
  return (
    <>
      <div className="addMainAccount">
        <SideBarTab functionName={functionName}/>
        <div className="add-mainAccount-page" style={{ margin: "25px",height:"100%",width:"100%"}}>
          <div className="head-content">
            <Typography style={{fontSize:"2.5rem"}} >UploadFile Excel</Typography>
          </div>
          <div className="DownloadTemplate mt-4">
            <TemplateMainAcc name={"Download Template"} />
            <div className="contentUpload mt-3">
              <ParseExcel name={"Upload File"} />
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <GenTableInput dataHeader={headerTableMainAccount} />
      </div> */}
    </>
  );
}
