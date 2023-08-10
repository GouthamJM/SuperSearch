import React from 'react';

import Form from 'react-bootstrap/Form';

import { useChains } from '../hooks/swr/useChains';

function Dropdown(props) {
  const { onChange, ...rest } = props;
  const {
    chainsList: { chainsWithoutTestNets },
  } = useChains();
  console.log(chainsWithoutTestNets, 'chainsList');
  const chainSelect = (e) => {
    const _chain = chainsWithoutTestNets.find(
      (_item) => _item.name === e.target.value
    );
    onChange?.(_chain);
  };
  return (
    <Form.Select aria-label="Select chain" {...rest} onChange={chainSelect}>
      {chainsWithoutTestNets?.map((_item) => (
        <option value={_item.name} key={_item.name}>
          {_item.label}
        </option>
      ))}
    </Form.Select>
  );
}

export default Dropdown;
