import React, { useState, useEffect } from "react";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Badge,
  TextField,
  Button,
  Hidden,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import TableSearchResult from "../TableSearchResult";
import SideBarTab from "../SidebarTab";
import { functionName } from "../../Model/MainData";

export default function SearchVoucher() {
  return (
    <>
    <div className="contentSearchVoucher">
          <SideBarTab functionName={functionName}/>
      <div className="SearchVoucher" style={{ margin: "25px",width:"100%",overflow:"auto",overflowX:"hidden"}}>
        <div style={{ paddingBottom: "25px", borderBottom: "Solid" }}>
          <Box>
            <Typography className="mb-3" variant="h3" style={{fontSize:"2.5rem"}}>
              Search Voucher
            </Typography>
            <Row className="option-search">
              <Col>
                <TextField
                  required
                  id="outlined-basic"
                  label="TagVoucher"
                  variant="outlined"
                />
              </Col>
              <Col>
                <TextField
                  required
                  id="outlined-basic"
                  label="DateTimeTO"
                  variant="outlined"
                />
              </Col>
              <Col>
                <TextField
                  required
                  id="outlined-basic"
                  label="DateTimeFrom"
                  variant="outlined"
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  startIcon={<SearchIcon />}
                  size="medium"
                  variant="contained"
                  color="primary"
                  style={{ width: 250 }}
                >
                  Search
                </Button>
              </Col>
              <Col style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  startIcon={<ClearIcon />}
                  variant="outlined"
                  color="primary"
                  style={{ width: 250 }}
                >
                  Clear
                </Button>
              </Col>
            </Row>
          </Box>
        </div>

        <Box style={{ marginTop: "10px" }}>
          <Typography style={{ marginBottom: "10px" }} variant="h4">
            Result Search
          </Typography>
          <TableSearchResult />
        </Box>

      </div>
    </div>

    </>
  );
}
