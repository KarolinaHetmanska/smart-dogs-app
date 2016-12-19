import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router'

import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import './App.css';

export default (props) => (
  <Grid>
    <Navbar collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">wmiasto</Link>
        </Navbar.Brand>

        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/places">
            <NavItem eventKey={1} href="#">Places</NavItem>
          </LinkContainer>

          <LinkContainer to="/events">
            <NavItem eventKey={2} href="#">Events</NavItem>
          </LinkContainer>

          <LinkContainer to="/events/list">
            <NavItem eventKey={3} href="#">EventsListView</NavItem>
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