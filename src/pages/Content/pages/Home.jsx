import React from 'react';
import Input from '../components/Input';
import { ButtonL, ButtonP } from '../components/Button';
import { useGlobalContext } from '../context/globalContext';
import { allStates } from '../InjectMaster';
import Dropdown from '../components/Dropdown';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../components/Title';

export default function Home() {
  const { updateStep, updateSearchForm, state } = useGlobalContext();

  const [chain, setChain] = React.useState(state.searchForm.chain);
  const [search, setSearch] = React.useState(state.searchForm.search);

  const onStateSubmit = () => {
    updateSearchForm(search, chain);
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
                value={chain.name}
                onChange={(item) => {
                  setChain(item);
                }}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-items-center justify-content-start">
            <Col md="auto">
              <ButtonP onClick={onStateSubmit}>Search</ButtonP>
            </Col>
            <Col md="auto">
              <ButtonL onClick={() => setSearch('')}>Clear</ButtonL>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
