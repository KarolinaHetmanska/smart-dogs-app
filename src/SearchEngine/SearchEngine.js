import React from 'react'
import { Link } from 'react-router'
import { events } from '../data'
import { FormGroup, FormControl, Col } from 'react-bootstrap'

export default (props) =>
  <div>
    <Col xs={6} xsOffset={3}>
    <h1>SearchEngine</h1>
    <form>
      <FormGroup
        controlId="formBasicText">
        <FormControl
          type="text"
          placeholder="Co chcesz zrobić?"
        />
      </FormGroup>
    </form>
      </Col>

    {props.children}

  </div>