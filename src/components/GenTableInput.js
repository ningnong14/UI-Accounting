import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

export default function GenTableInput(props) {
  console.log(props);
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {props.dataHeader.head.map((item, key) => (
                <StyledTableCell key={key} align="center">
                  {item}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          {props.addBodyTable.count != 0 &&
            Array.from({ length: props.addBodyTable.count }, (_, index) => (
              <TableBody key={index}>
                <StyledTableRow key={index}>
                  {props.dataHeader.head.map((item, key) => (
                    <StyledTableCell key={key} component="th" scope="row">
                      <TextField id={item} label={item} variant="outlined" />
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              </TableBody>
            ))}
        </Table>
      </TableContainer>
    </>
  );
}
