import React from 'react';

import { chainServices } from '../utils';

function ChainDropdown(props) {
  const { onChange, ...rest } = props;

  const chainSelect = (e) => {
    const _chain = chainServices
      .getAllChainsData()
      .find((_item) => _item.name === e.target.value);
    onChange?.(_chain);
  };
  return (
    <select
      aria-label="Select chain"
      {...rest}
      onChange={chainSelect}
      className="supersearch-form-select"
    >
      {chainServices.getAllChainsData()?.map((_item) => (
        <option value={_item.name} key={_item.name}>
          {_item.label}
        </option>
      ))}
    </select>
  );
}

export default ChainDropdown;
