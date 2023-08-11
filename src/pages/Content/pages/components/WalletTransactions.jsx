import React from 'react';
import { formatDate, shortenAddress } from '../../utils';

export default function WalletTransactions({ transactions = [] }) {
  return (
    <div>
      {transactions?.map((_item) => (
        <div className="transactionItem">
          <div>
            <div className="pb-2 heading7">
              Hash: <b>{shortenAddress(_item.tx_hash)}</b>
            </div>
            <div className="supportTextGray">
              {formatDate(_item.block_signed_at, true)}
            </div>
          </div>
          <div>
            <div className="pb-2 heading7">{_item.pretty_value_quote}</div>
            <div className="supportTextGray">
              To: {shortenAddress(_item.to_address)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
