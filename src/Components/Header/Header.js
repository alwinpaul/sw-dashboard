import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { MdFormatIndentIncrease, MdFormatIndentDecrease } from "react-icons/md";
import { UserControl } from "./../UserControl/UserControl";
import "./Header.css";

const logo = require("./../../Assets/images.jpeg");

export class Header extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row className="header-body">
          <Col xs="2" className="logo">
            <img src={logo} alt="safechain logo" />
          </Col>

          <Col className="nav-btn">
            <div className="nav-menu-icon">
              {this.props.showNav ? (
                <MdFormatIndentDecrease
                  onClick={() => this.props.toggleNav()}
                />
              ) : (
                <MdFormatIndentIncrease
                  onClick={() => this.props.toggleNav()}
                />
              )}
            </div>
          </Col>

          <Col xs="3" className="profile">
            <UserControl />
          </Col>
        </Row>
      </Container>
    );
  }
}
