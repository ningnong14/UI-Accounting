import React, { useState, useEffect } from "react";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
import PicMenu1 from "../../src/images/function1.jpg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchVoucher from "./Page/SearchVoucher";


export default function MenuItem(props) {
  const navigate = useNavigate(); //Link Url

  const onClickFunction = (name) => {
    switch(name){
      case "Search Voucher": navigate('/SearchVoucher')
      break
      case "Add MainAccount": navigate('/AddMainAccount')
      break
      case "Record Voucher":navigate('/RecordVoucher')
      break
      default : navigate('/login')
    }
  };
  //CallService เก็บรายละเอียด function + pic ไว้แสดง หน้าบ้าน

  return (
    <>
      <div
        className="menuItemFunction"
        style={{ marginLeft: 40, marginRight: 40 }}
      >
        <Col className="headContent">
          <h1>ระบบการจัดการบัญชี Accounting</h1>
        </Col>
        <Row
          xs={1}
          md={2}
          className="g-4 "
          style={{ marginTop: "4.5rem", justifyContent: "space-around" }}
        >
          {props.functionName.map((item, idx) => (
            <Col xs={3} key={idx} className="mb-2" style={{ maxWidth: "20%" }}>
              <Card
                className="box-shadow"
                onClick={() => onClickFunction(item)}
              >
                <Card.Img
                  variant="top"
                  src={PicMenu1}
                  className="pic-card-content"
                />
                <Card.Body className="card-content">
                  <Card.Text>{item}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
