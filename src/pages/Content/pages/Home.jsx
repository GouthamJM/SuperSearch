import React from 'react';
import Input from '../components/Input';
import { ButtonP } from '../components/Button';
import { useGlobalContext } from '../context/globalContext';
import { allStates } from '../InjectMaster';
import Dropdown from '../components/Dropdown';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../components/Title';

export default function Home() {
  const { updateStep } = useGlobalContext();

  const onStateSubmit = () => {
    updateStep(allStates.transaction);
  };
  return (
    <div className="homeContainer px-2 py-4">
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
              <ButtonP onClick={onStateSubmit}>Search</ButtonP>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
