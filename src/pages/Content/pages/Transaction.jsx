import React from 'react';

import { useGlobalContext } from '../context/globalContext';
import TransactionDetail from './components/TransactionDetail';
import { useTransactionDetail } from '../hooks/swr/useTransactionDetail';
import { useEffect } from 'react';

export default function Transaction() {
  const { state, updateAPILoader, updateError } = useGlobalContext();
  const { transactionDetail, transactionDeatilLoader } = useTransactionDetail(
    state.searchForm.chain.chain_id,
    state.searchForm.search,
    (_err) => {
      updateError('No Transaction Found');
    }
  );
  useEffect(() => {
    if (!transactionDeatilLoader) {
      updateAPILoader(false);
    } else {
      updateAPILoader(true);
    }
  }, [transactionDeatilLoader]);
  console.log(transactionDeatilLoader, transactionDetail, 'transactionDetail');

  return (
    <div>
      {!transactionDeatilLoader && transactionDetail ? (
        <>
          <div className="heading6 ss-pb-3">Transaction details</div>
          <div className="transactionBox">
            <TransactionDetail {...transactionDetail} />
          </div>
        </>
      ) : null}
      {state.error && <div className="heading6">{state.error}</div>}
    </div>
  );
}
