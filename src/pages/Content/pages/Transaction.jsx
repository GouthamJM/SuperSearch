import React from 'react';
import Input from '../components/Input';
import Title from '../components/Title';
import { ButtonP } from '../components/Button';
import Dropdown from '../components/Dropdown';
import { Container, Row, Col } from 'react-bootstrap';
import { useGlobalContext } from '../context/globalContext';
import TransactionDetail from './TransactionDetail';
import { useTransactionDetail } from '../hooks/swr/useTransactionDetail';

export default function Transaction() {
  const { updateStep, updateSearchForm, state } = useGlobalContext();

  const [chain, setChain] = React.useState(state.searchForm.chain);
  const [search, setSearch] = React.useState(state.searchForm.search);

  const { transactionDetail, transactionDeailLoader } = useTransactionDetail(
    chain.chain_id,
    search
  );

  return (
    <div className="transactionContainer px-2 py-4">
      <div className="pb-2">
        <Title />
      </div>
      <div className="pb-4">
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
          <Row className="align-items-center">
            <Col>
              <ButtonP>Search</ButtonP>
            </Col>
          </Row>
        </Container>
      </div>
      {transactionDeailLoader ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Container>
            <Row>
              <Col md="auto">
                <div className="bg-light bg-gradient px-2 py-4 rounded">
                  <TransactionDetail {...transactionDetail} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}
