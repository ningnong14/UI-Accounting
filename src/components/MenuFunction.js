import React, { useState, useEffect } from "react";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
import PicMenu1 from "../../src/images/function1.jpg";
import SearchVoucher from "./Page/SearchVoucher";
import iconKey from "../images/icon-key.jpg";
import iconExcel from "../images/excel-icons.jpg";
import Button from "react-bootstrap/Button";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ImportMainAccount from "./ImportMainAccount";
import RecordVoucher from "./Page/RecordVoucher";
import { Route, Routes } from "react-router-dom";

export default function MenuFunction() {
  const navigate = useNavigate(); //Link Url

  const onclickChoice = (nameFunction) => {
    switch (nameFunction) {
      case "record":
        break;
      case "import":
        navigate("/importMainAccount");
        break;
    }
  };

  return (
    <>
      <div
        className="choice-menu-import"
        style={{ width: "100%", marginTop: "40px" }}
      >
        <Row style={{ height: 500, width: "100%" }}>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              to={{
                pathname: "/RecordVoucher",
                state: { yourProp: "SSSSS" }, // ส่ง props ผ่าน state
              }}
            >
              <div id="record" name="record" style={{ cursor: "pointer" }}>
                <Card id="record" style={{ width: "20rem", height: "25rem" }}>
                  <Card.Img
                    name="record"
                    variant="top"
                    src={iconKey}
                    style={{ height: "320px" }}
                  />
                  <Card.Body
                    id="record"
                    name="record"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Card.Title>AddMainAccount By Record</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "-5rem",
            }}
          >
            <div
              name="import"
              style={{ cursor: "pointer" }}
              onClick={(e) => onclickChoice("import")}
            >
              <Card
                id="import"
                name="import"
                style={{ width: "20rem", height: "25rem" }}
              >
                <Card.Img
                  name="import"
                  variant="top"
                  src={iconExcel}
                  style={{ height: "320px" }}
                />
                <Card.Body
                  name="import"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Card.Title name="import">
                    AddMainAccount By File Excel
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
