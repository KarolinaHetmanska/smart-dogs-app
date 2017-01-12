import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'
import  logo from '../../public/img/logo-w-miasto.png'

import {
  Navbar,
  Nav,
  NavItem,
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import './App.css';

export default (props) => (
  <Grid fluid>
    <Navbar collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img className="nav-logo" src={logo} role="presentation"  />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer to="/places">
            <NavItem eventKey={1} href="#"><span className="menu-item">MIEJSCA</span></NavItem>
          </LinkContainer>

          <LinkContainer to="/events">
            <NavItem eventKey={2} href="#">WYDARZENIA</NavItem>
          </LinkContainer>

          <LinkContainer to="/favorites">
            <NavItem eventKey={3} href="#">ULUBIONE</NavItem>
          </LinkContainer>

          <LinkContainer to="/login">
            <NavItem eventKey={4} href="#">ZALOGUJ</NavItem>
          </LinkContainer>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Row>
      <Col md={12}>
        {props.children}
      </Col>
    </Row>

  </Grid>
)