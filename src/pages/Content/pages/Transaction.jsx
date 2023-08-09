import React from 'react';
import Input from '../components/Input';
import Title from '../components/Title';
import { ButtonP } from '../components/Button';
import Dropdown from '../components/Dropdown';
import { Container, Row, Col } from 'react-bootstrap';
export default function Transaction() {
  return (
    <div className="transactionContainer">
      <div className="pb-2">
        <Title />
      </div>
      <div className="pb-2">
        <Container className="pb-4">
          <Row className="align-items-center">
            <Col md={8} className="pr-0">
              <Input />
            </Col>
            <Col md={4}>
              <Dropdown />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-items-center">
            <Col>
              <ButtonP>Search</ButtonP>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
