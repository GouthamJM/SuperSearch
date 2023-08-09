import React from 'react';
import Input from '../components/Input';
import { ButtonP } from '../components/Button';
import { useGlobalContext } from '../context/globalContext';
import { allStates } from '../InjectMaster';
import Dropdown from '../components/Dropdown';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../components/Title';

export default function Home() {
  const { updateStep, updateSearchForm } = useGlobalContext();

  const [chain, setChain] = React.useState('eth-mainnet');
  const [search, setSearch] = React.useState('');

  const onStateSubmit = () => {
    updateSearchForm(chain, search);
    updateStep(allStates.transaction);
  };
  return (
    <div className="homeContainer px-2 py-4">
      <div className="pb-2">
        <Title />
      </div>
      <div className="pb-2">
        <Container className="pb-3">
          <Row className="align-items-center">
            <Col md={8} className="pr-0">
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            <Col md={4}>
              <Dropdown
                value={chain}
                onChange={(e) => {
                  setChain(e.target.value);
                }}
              />
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
