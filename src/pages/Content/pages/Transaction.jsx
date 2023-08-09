import React from 'react';
import Input from '../components/Input';
import Title from '../components/Title';
import { ButtonP } from '../components/Button';
import Dropdown from '../components/Dropdown';
import { Container, Row, Col } from 'react-bootstrap';
import { useGlobalContext } from '../context/globalContext';

export default function Transaction() {
  const { updateStep, updateSearchForm, state } = useGlobalContext();

  const [chain, setChain] = React.useState(state.searchForm.chain);
  const [search, setSearch] = React.useState(state.searchForm.search);

  const onStateSubmit = () => {
    updateSearchForm(search, chain);
  };
  return (
    <div className="transactionContainer px-2 py-4">
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
              <ButtonP>Search</ButtonP>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
