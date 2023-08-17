import React from 'react';

import { useGlobalContext } from '../context/globalContext';
import BlockDetail from './components/BlockDetail';
import { useBlockDetail } from '../hooks/swr/useBlockDetail';
import { useEffect } from 'react';

export default function Transaction() {
  const { state, updateAPILoader, updateError } = useGlobalContext();
  const { blockDetail, blockDetailLoader } = useBlockDetail(
    state.searchForm.chain.chain_id,
    state.searchForm.search,
    (_err) => {
      updateError('No Block Found');
    }
  );
  useEffect(() => {
    if (!blockDetailLoader) {
      updateAPILoader(false);
    } else {
      updateAPILoader(true);
    }
  }, [blockDetailLoader]);

  console.log('blockDetail', blockDetail);

  return (
    <div>
      {!blockDetailLoader && blockDetail ? (
        <>
          <div className="heading6 ss-pb-3">Block Details</div>
          <div className="transactionBox">
            <BlockDetail {...blockDetail.data} />
          </div>
        </>
      ) : null}
      {state.error && <div className="heading6">{state.error}</div>}
    </div>
  );
}
