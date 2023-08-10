import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useGlobalContext } from '../context/globalContext';
import TransactionDetail from './TransactionDetail';
import { useTransactionDetail } from '../hooks/swr/useTransactionDetail';
import Header from './Header';

export default function Transaction() {
  const { state } = useGlobalContext();

  const { transactionDetail, transactionDeailLoader } = useTransactionDetail(
    state.searchForm.chain.chain_id,
    state.searchForm.search
  );

  return (
    <div className="transactionContainer px-2 py-4">
      <div className="pb-2">
        <Header type="transaction" />
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
            <div className="heading5">No transaction found</div>
          )}
        </>
      )}
    </div>
  );
}
