import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import {
  formatDate,
  gasValueWeiToGwei,
  getPercentage,
  getTokenFormattedNumber,
} from '../utils';

export default function TransactionPage({
  block_height,
  block_signed_at,
  value,
  tx_hash,
  successful,
  from_address,
  to_address,
  pretty_value_quote,
  gas_offered,
  gas_spent,
  gas_price,
  fees_paid,
  pretty_gas_quote,
  gas_metadata,
  from_address_label,
}) {
  return (
    <Container>
      <Row>
        <Col md="4">
          <div className="heading6">Tx Hash:</div>
        </Col>
        <Col>
          <p className="paragraph">{tx_hash}</p>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <div className="heading6">Status:</div>
        </Col>
        <Col>
          <p className="paragraph">{successful ? 'Success' : 'Failed'}</p>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <div className="heading6">Block:</div>
        </Col>
        <Col>
          <p className="paragraph">{block_height}</p>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <div className="heading6">Time Stamp:</div>
        </Col>
        <Col>
          <p className="paragraph">{formatDate(block_signed_at, true)}</p>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <div className="heading6">From:</div>
        </Col>
        <Col>
          <p className="paragraph">
            {from_address}
            {from_address_label ? `(${from_address_label})` : ''}
          </p>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <div className="heading6">To:</div>
        </Col>
        <Col>
          <p className="paragraph">{to_address}</p>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <div className="heading6">Value:</div>
        </Col>
        <Col>
          <p className="paragraph">
            {getTokenFormattedNumber(
              Number(value),
              gas_metadata.contract_decimals
            )}{' '}
            {gas_metadata.contract_ticker_symbol} ({pretty_value_quote})
          </p>
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <div className="heading6">Transaction Fee:</div>
        </Col>
        <Col>
          <p className="paragraph">
            {getTokenFormattedNumber(
              fees_paid,
              gas_metadata.contract_decimals,
              false
            )}{' '}
            {gas_metadata.contract_ticker_symbol} ({pretty_gas_quote})
          </p>
        </Col>
      </Row>

      <Row>
        <Col md="4">
          <div className="heading6">Gas Price:</div>
        </Col>
        <Col>
          <p className="paragraph">{gasValueWeiToGwei(gas_price)} Gwei</p>
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <div className="heading6"> Gas Limit & Usage:</div>
        </Col>
        <Col>
          <p className="paragraph">
            {gas_offered} | {gas_spent} ({getPercentage(gas_spent, gas_offered)}
            %)
          </p>
        </Col>
      </Row>
    </Container>
  );
}
