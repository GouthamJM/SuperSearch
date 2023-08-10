import React from 'react';
import Input from '../components/Input';
import Title from '../components/Title';
import { ButtonL, ButtonP } from '../components/Button';
import Dropdown from '../components/Dropdown';
import { Container, Row, Col } from 'react-bootstrap';
import { useGlobalContext } from '../context/globalContext';
import TransactionDetail from './TransactionDetail';
import { useTransactionDetail } from '../hooks/swr/useTransactionDetail';

export default function Transaction() {
  const { updateSearchForm, state, resetStep, resetSearchForm } =
    useGlobalContext();

  const [chain, setChain] = React.useState(state.searchForm.chain);
  const [search, setSearch] = React.useState(state.searchForm.search);

  const { transactionDetail, transactionDeailLoader } = useTransactionDetail(
    state.searchForm.chain.chain_id,
    state.searchForm.search
  );

  const onStateSubmit = () => {
    updateSearchForm(search, chain);
  };

  const onGoBack = () => {
    resetStep();
    resetSearchForm();
  };

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
          <Row className="align-items-center justify-content-between">
            <Col md="auto">
              <Row>
                <Col md="auto">
                  <ButtonP onClick={onStateSubmit}>Search</ButtonP>
                </Col>
                <Col md="auto">
                  <ButtonL onClick={() => setSearch('')}>Clear</ButtonL>
                </Col>
              </Row>
            </Col>
            <Col md="auto">
              <ButtonP onClick={onGoBack}>Go Back</ButtonP>
            </Col>
          </Row>
        </Container>
      </div>

      {transactionDeailLoader ? (
        <p>Loading...</p>
      ) : (
        <>
          {transactionDetail ? (
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
          ) : (
            <div className="heading5">Not Found</div>
          )}
        </>
      )}
    </div>
  );
}
