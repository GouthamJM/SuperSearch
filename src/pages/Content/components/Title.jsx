import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default function Title() {
  return (
    <Container>
      <Row className="justify-content-between align-items-center">
        <Col md="auto">
          <div className="heading5">Super Search</div>
        </Col>
        <Col md="auto">
          <div className="metadata">powered by Covalent</div>
        </Col>
      </Row>
    </Container>
  );
}
