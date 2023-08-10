import React from 'react';

import Form from 'react-bootstrap/Form';
import { chainServices } from '../utils';

function Dropdown(props) {
  const { onChange, ...rest } = props;

  const chainSelect = (e) => {
    const _chain = chainServices
      .getAllChainsData()
      .find((_item) => _item.name === e.target.value);
    onChange?.(_chain);
  };
  return (
    <Form.Select aria-label="Select chain" {...rest} onChange={chainSelect}>
      {chainServices.getAllChainsData()?.map((_item) => (
        <option value={_item.name} key={_item.name}>
          {_item.label}
        </option>
      ))}
    </Form.Select>
  );
}

export default Dropdown;
