import React from 'react';

import Form from 'react-bootstrap/Form';

import { useChains } from '../hooks/swr/useChains';

function Dropdown(props) {
  const {
    chainsList: { chainsWithoutTestNets },
  } = useChains();

  return (
    <Form.Select aria-label="Select chain" {...props}>
      {chainsWithoutTestNets?.map((_item) => (
        <option value={_item.name} key={_item.name}>
          {_item.label}
        </option>
      ))}
    </Form.Select>
  );
}

export default Dropdown;
