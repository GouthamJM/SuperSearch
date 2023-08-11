import React from 'react';

import { getTokenFormattedNumber } from '../utils';

function TokensDropdown(props) {
  const { onChange, tokens, totalBalanceIn$, ...rest } = props;

  return (
    <select
      aria-label="Select chain"
      {...rest}
      // onChange={chainSelect}
      className="supersearch-form-select"
    >
      {tokens?.map((_item) => (
        <option value={_item?.contract_address} key={_item?.contract_address}>
          {getTokenFormattedNumber(_item?.balance, _item?.contract_decimals)}{' '}
          {_item?.contract_ticker_symbol} ({_item?.pretty_quote})
        </option>
      ))}
    </select>
  );
}

export default TokensDropdown;
