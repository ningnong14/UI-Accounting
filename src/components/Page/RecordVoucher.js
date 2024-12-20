import React, { useState, useEffect } from "react";
import GenTableInput from "../GenTableInput";
import { headerTableRecordAccount } from "../../Model/MainData";
import { addBodyCountTable } from "../../Model/MainData";
import SideBarTab from "../SidebarTab";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { functionName } from "../../Model/MainData";
import { useLocation } from 'react-router-dom';

const RecordVoucher=(props)=> {
  console.log("props",props);
  const [headerTableRecord, setHeaderTableRecordAccount] = useState(
    headerTableRecordAccount
  );
  const [addBodyTable, setCountBody] = useState(addBodyCountTable); //ดักจับจากการ click เพิ่ม column ยังไม่ได้ทำ

  const onClickAddCountBody = () => {
    setCountBody((prevCountObject) => ({
      ...prevCountObject,
      count: prevCountObject.count + 1,
    }));
  };
  const onClickRecordVoucher = () =>{

  }
  return (
    <>
      <div className="recordVoucher">
        <SideBarTab functionName={functionName}/>
        <div className="content">
          <Row className="mb-1" style={{ height: "10%" }}>
            <Col>
              <h2 style={{ paddingLeft: 20,fontSize:"2.5rem" }}>Record Voucher</h2>
            </Col>
            <Col
              style={{
                display: "flex",
                justifyContent: "end",
                width: "50%",
                height: "50%",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ width: "50%", backgroundColor: "green" }}
                onClick={(e) => onClickAddCountBody(e)}
              >
                <span style={{whiteSpace:"nowrap"}}>Add Record Table
                  </span>
              </Button>
            </Col>
          </Row>
          <GenTableInput
            dataHeader={headerTableRecord}
            addBodyTable={addBodyTable}
          />
          <Row style={{height:"10%"}}>
            <Col style={{display:"flex",justifyContent:"center",height:"70%"}}>
              <Button
                className="mt-3"
                variant="contained"
                color="primary"
                style={{ width: "50%", backgroundColor: "green" }}
                onClick={(e) => onClickRecordVoucher(e)}
              >
                Ok
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
export default RecordVoucher;