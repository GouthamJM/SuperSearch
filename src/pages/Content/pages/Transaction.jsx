import React from 'react';

import { useGlobalContext } from '../context/globalContext';
import TransactionDetail from './components/TransactionDetail';
import { useTransactionDetail } from '../hooks/swr/useTransactionDetail';
import { useEffect } from 'react';

export default function Transaction() {
  const { state, updateAPILoader } = useGlobalContext();

  const { transactionDetail, transactionDeailLoader } = useTransactionDetail(
    state.searchForm.chain.chain_id,
    state.searchForm.search
  );

  useEffect(() => {
    if (!transactionDeailLoader) {
      updateAPILoader(false);
    } else {
      updateAPILoader(true);
    }
  }, [transactionDeailLoader]);

  return (
    <div>
      {transactionDeailLoader ? null : (
        <>
          <div className="heading6 pb-3">Transaction details</div>
          <div className="transactionBox">
            <TransactionDetail {...transactionDetail} />
          </div>
        </>
      )}
    </div>
  );
}
