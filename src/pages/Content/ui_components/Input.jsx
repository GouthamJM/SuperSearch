import React from 'react';

export default function Input(props) {
  return (
    <input
      type="text"
      placeholder="Address / Txn Hash"
      {...props}
      className="superSearch-form-control"
    />
  );
}
