import React, { useState, useEffect } from "react";
import XLSX from "xlsx";
import { dataAddMainAccount } from "../Model/MainData";
import { Button } from "@material-ui/core";
import { CloudUpload } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { isDataUpload } from "../Model/MainData";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
import ImportGenTableExcel from "./ImportGenTableExcel";

// import VisuallyHiddenInput

export default function ParseExcel(props) {
  console.log("props", props);
  const [excelData, setExcelData] = useState(dataAddMainAccount);
  const [name, SetName] = useState(props.name);
  const [isUpload, SetIsUpload] = useState(isDataUpload.status);
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const haddleFile = async (e) => {
    if (e.target.files[0] != null) {
      //การอ่านไฟล์ column excel
      const file = e.target.files[0];
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet); //ดึงข้อมูล excel มาในรูป json

      //***เปลี่ยนแปลง stateจะเกิดขึ้นก็ต่อเมื่อ เป็น object ถ้าเกิด เป็น array มันจะมองไม่เห็นการเปลี่ยนแปลง เวลาสร้างก็ให้ดู Model**
      if (jsonData != null) {
        let mapData = excelData.data.concat(jsonData); //array ต่อกันเรื่อยๆ
        setExcelData({ ...excelData, data: mapData }); // ...excelData แตกข้อมูลเก่า เปลี่ยนเฉพาะบางobject
        SetIsUpload({ ...isUpload, status: true });
      }
    }
  };

  return (
    <>
      <Button style={{display:"flex"}} component="label" size="large" variant="contained" startIcon={<CloudUpload />}>
        {name}
        <VisuallyHiddenInput size="large" type="file" onChange={(e) => haddleFile(e)} />
      </Button>
      {excelData.data.length != 0 && <div><ImportGenTableExcel genData={excelData.data} />
        </div>}
      {isUpload.status && (
        <Row className={"Confrim mt-4"}>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              component="label"
              size="large"
              style={{
                backgroundColor: "green",
                width: "500px",
                color: "white",
              }}
            >
              Confirm
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
}
