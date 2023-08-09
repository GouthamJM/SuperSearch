import React from 'react';
import Form from 'react-bootstrap/Form';

export default function Input() {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="text" placeholder="Vitalik.eth" />
      </Form.Group>
    </Form>
  );
}
