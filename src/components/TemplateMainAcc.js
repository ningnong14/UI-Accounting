import React from "react";
import XLSX from "xlsx";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { Download } from "@mui/icons-material";

export default function TemplateMainAcc (props) {
  const [name,SetName] = useState(props.name);

  const getTemplate = () => {
    let wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet([
      //Data ที่ต้องการจะสร้างใน Excel
      ["MainAccount", "Name"],
      ["1000EX", "Ex...ASSETS"],
    ]);
    XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
    XLSX.writeFile(wb, "TemplateAddMainAccount.xlsx");
  };

  return (
    <>
      <Button
        component="label"
        variant="contained"
        startIcon={<Download />}
        onClick={()=>{getTemplate()}}
        style={{display:"flex",padding:8}}
      >
        {name}
      </Button>
    </>
  );
}
