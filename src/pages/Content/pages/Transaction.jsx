import React from 'react';

import { useGlobalContext } from '../context/globalContext';
import TransactionDetail from './components/TransactionDetail';
import { useTransactionDetail } from '../hooks/swr/useTransactionDetail';
import Header from './components/Header';

export default function Transaction() {
  const { state } = useGlobalContext();

  const { transactionDetail, transactionDeailLoader } = useTransactionDetail(
    state.searchForm.chain.chain_id,
    state.searchForm.search
  );

  return (
    <div>
      <div className="pb-2">
        <Header type="transaction" />
      </div>
      {transactionDeailLoader ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="heading6 pb-3">Transaction details</div>
          {transactionDetail ? (
            <div className="transactionBox">
              <TransactionDetail {...transactionDetail} />
            </div>
          ) : (
            <div className="heading5">No transaction found</div>
          )}
        </>
      )}
    </div>
  );
}
