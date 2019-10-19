import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

export function TabularList(props) {
  const classes = useStyles();
  return (
    <Table className={classes.table} aria-label="simple table">
      <TableBody>
        {props.rows.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
