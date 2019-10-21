import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MdInsertDriveFile } from "react-icons/md";
import {
  makeStyles,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import "./Orders.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  itemVal: {
    color: "#666",
    fontSize: "12px",
    margin: "5px 0px",
    fontWeight: 300
  }
}));

export const Orders = () => {
  const classes = useStyles();
  let value = 10;

  return (
    <div>
      <div className="top">
        <Container>
          <Row className="page-title">
            <Col xs="8" className="">
              <div className="icon">
                <MdInsertDriveFile />
              </div>
              <div className="title">
                Orders
                <div className="total-order">Total orders: 3</div>
              </div>
            </Col>

            <Col xs="4"></Col>
          </Row>

          <Row className="page-controls">
            <Col xs="8"></Col>
            <Col xs="4">
              <span className="text-sort">Sort By</span>
              <FormControl className={classes.formControl}>
                <Select className="select" value={value}>
                  <MenuItem className={classes.itemVal} value={10}>
                    closing date
                  </MenuItem>
                  <MenuItem className={classes.itemVal} value={20}>
                    order ID
                  </MenuItem>
                  <MenuItem className={classes.itemVal} value={30}>
                    property ID
                  </MenuItem>
                  <MenuItem className={classes.itemVal} value={40}>
                    property address
                  </MenuItem>
                  <MenuItem className={classes.itemVal} value={50}>
                    order creation date
                  </MenuItem>
                </Select>
              </FormControl>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
