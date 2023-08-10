import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

export default function WalletDetail({}) {
  return (
    <Container>
      <Row>
        <Col md="4">
          <div className="heading6">Wallet Balace:</div>
        </Col>
        <Col>
          <p className="paragraph">Balance</p>
        </Col>
      </Row>
    </Container>
  );
}
