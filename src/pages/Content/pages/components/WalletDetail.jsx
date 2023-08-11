import React from 'react';
import TokensDropdown from '../../ui_components/TokensDropdown';
import {
  getCurrencyFormattedString,
  getTokenFormattedNumber,
} from '../../utils';

export default function WalletDetail({
  tokens,
  totalBalanceIn$,
  nativeTokenBalance,
  address,
}) {
  return (
    <div className="walletContainer">
      <div className="walletHeader heading7">{address}</div>
      <div className="walletBody">
        <div className="walletBalance">
          <div className="walletItem">
            <div className="supportText pb-2">Total Balance</div>
            <div className="heading5">
              {getCurrencyFormattedString(totalBalanceIn$)}
            </div>
          </div>
          <div className="walletItem">
            <div className="supportText pb-2">
              {nativeTokenBalance?.contract_ticker_symbol} Balance
            </div>
            <div className="heading5">
              {getTokenFormattedNumber(
                nativeTokenBalance?.balance,
                nativeTokenBalance?.contract_decimals
              )}{' '}
              {nativeTokenBalance?.contract_ticker_symbol}
            </div>
            <div className="supportTextGray">
              ({nativeTokenBalance?.pretty_quote_24h ?? ''})
            </div>
          </div>
        </div>
        <div className="walletHoldings">
          <div className="supportText pb-2">Token holdings</div>
          <TokensDropdown tokens={tokens} totalBalanceIn$={totalBalanceIn$} />
        </div>
      </div>
    </div>
  );
}
