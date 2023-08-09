import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Input(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Vitalik.eth" {...props} />
      </Form.Group>
    </Form>
  );
}
