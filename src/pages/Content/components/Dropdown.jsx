import React from 'react';

import Form from 'react-bootstrap/Form';

import { useChains } from '../hooks/swr/useChains';

function Dropdown() {
  const {
    chainsList: { chainsWithoutTestNets },
  } = useChains();

  console.log(chainsWithoutTestNets, 'chainsWithoutTestNets');

  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

export default Dropdown;
