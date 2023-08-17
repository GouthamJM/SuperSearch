import React from 'react';

export default function Input(props) {
  return (
    <input
      type="text"
      placeholder="Address / Txn Hash / ENS / Block"
      {...props}
      className="superSearch-form-control"
    />
  );
}
