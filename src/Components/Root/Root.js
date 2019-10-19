import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SideNav } from "./../SideNav/SideNav";
import { ContentFrame } from "./../ContentFrame/ContentFrame";
import "./Root.css";

export class Root extends Component {
  render() {
    const ui = (
      <Row className="main-body">
        {this.props.showNav && (
          <Col xs="2" className="col">
            <SideNav />
          </Col>
        )}
        <Col>
          <ContentFrame />
        </Col>
      </Row>
    );
    return <Container fluid={true}>{ui}</Container>;
  }
}

// export default Root;
