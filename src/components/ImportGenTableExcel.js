import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Row, Col, Image, Container, Card } from "react-bootstrap";
import {
    Box,
    IconButton,
    Typography,
    useTheme,
    Badge,
    TextField,
    Button,
  } from "@mui/material";

export default function ImportGenTableExcel(props) {
  return (
    <>
    <Box className={"mt-3"}>
        <Typography variant="h4" className="mb-3">Import Excel Data</Typography>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>MainAccount</TableCell>
              <TableCell align="right">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.genData.map((row,index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.MainAccount}
                </TableCell>
                <TableCell align="right">{row.Name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </>
  );
}
