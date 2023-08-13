import React from 'react';
import { formatDate, shortenAddress } from '../../utils';
import { useGlobalContext } from '../../context/globalContext';

export default function WalletTransactions({ transactions = [] }) {
  const { updatePageDetail, state } = useGlobalContext();
  return (
    <div>
      {transactions?.map((_item) => (
        <div className="transactionItem">
          <div>
            <div className="ss-pb-2 heading7">
              Hash:{' '}
              <span
                className="clickableText"
                onClick={() => {
                  updatePageDetail(_item?.tx_hash, state.searchForm.chain);
                }}
              >
                {shortenAddress(_item?.tx_hash)}
              </span>
            </div>
            <div className="supportTextGray">
              {formatDate(_item?.block_signed_at, true)}
            </div>
          </div>
          <div>
            <div className="ss-pb-2 heading7">
              Value: {_item?.pretty_value_quote}
            </div>
            <div className="supportTextGray">
              To:{' '}
              <span
                className="clickableText"
                onClick={() => {
                  updatePageDetail(_item?.to_address, state.searchForm.chain);
                }}
              >
                {shortenAddress(_item?.to_address)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
