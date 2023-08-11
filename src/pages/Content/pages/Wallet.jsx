import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useGlobalContext } from '../context/globalContext';
import Header from './Header';
import WalletDetail from './components/WalletDetail';
import { useWalletBalance } from '../hooks/swr/useWalletBalance';
// import { useWalletPortfolioGraph } from '../hooks/swr/useWalletPortfolioGraph';

export default function Wallet() {
  const { state } = useGlobalContext();

  const { walletBalance, walletBalanceLoader } = useWalletBalance(
    state.searchForm.chain.chain_id,
    state.searchForm.search
  );

  /*
  const { walletPortfolioGraph, walletPortfolioLoader } =
    useWalletPortfolioGraph(
      state.searchForm.chain.chain_id,
      state.searchForm.search
    );
  */
  console.log(walletBalance, 'walletBalance');
  return (
    <div className="transactionContainer px-2 py-4">
      <div className="pb-2">
        <Header type="wallet" />
      </div>
      {walletBalanceLoader ? (
        <p>Loading...</p>
      ) : (
        <>
          {walletBalance ? (
            <div>
              <Container>
                <Row>
                  <Col md="auto">
                    <div className="bg-light bg-gradient px-2 py-4 rounded">
                      <WalletDetail {...walletBalance} />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          ) : (
            <div className="heading5">No account wallet address found</div>
          )}
        </>
      )}
    </div>
  );
}
