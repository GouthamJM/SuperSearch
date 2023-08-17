import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import {
  formatDate,
  gasValueWeiToGwei,
  getPercentage,
  getTokenFormattedNumber,
} from '../../utils';

import { successSvg, pendingSvg } from '../../constants';
import { useGlobalContext } from '../../context/globalContext';

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
  const { updatePageDetail, state } = useGlobalContext();
  return (
    <div>
      <div>
        <Container className="ss-p-0">
          <div className="transactionColumn">
            <Row>
              <Col md="4">
                <div className="supportText medium">Tx Hash:</div>
              </Col>
              <Col>
                <p
                  className="supportText clickableText"
                  onClick={() => {
                    updatePageDetail(tx_hash, state.searchForm.chain);
                  }}
                >
                  {tx_hash}
                </p>
              </Col>
            </Row>
          </div>
          <div className="transactionColumn">
            <Row className="align-items-center">
              <Col md="4">
                <div className="supportText medium">Status:</div>
              </Col>
              <Col>{successful ? successSvg : pendingSvg}</Col>
            </Row>
          </div>
          <div className="transactionColumn">
            <Row>
              <Col md="4">
                <div className="supportText medium">Block:</div>
              </Col>
              <Col>
                <p
                  className="supportText d-sm-inline clickableText"
                  onClick={() =>
                    updatePageDetail(block_height, state.searchForm.chain)
                  }
                >
                  {block_height}
                </p>
              </Col>
            </Row>
          </div>
          <div className="transactionColumn">
            <Row>
              <Col md="4">
                <div className="supportText medium">Time Stamp:</div>
              </Col>
              <Col>
                <p className="supportText">
                  {formatDate(block_signed_at, true)}
                </p>
              </Col>
            </Row>
          </div>
          <div className="transactionColumn">
            <Row>
              <Col md="4">
                <div className="supportText medium">From:</div>
              </Col>
              <Col>
                <p
                  className="supportText clickableText"
                  onClick={() => {
                    updatePageDetail(from_address, state.searchForm.chain);
                  }}
                >
                  {from_address}
                  {from_address_label ? `(${from_address_label})` : ''}
                </p>
              </Col>
            </Row>
          </div>
          <div className="transactionColumn">
            <Row>
              <Col md="4">
                <div className="supportText medium">To:</div>
              </Col>
              <Col>
                <p
                  className="supportText clickableText"
                  onClick={() => {
                    updatePageDetail(to_address, state.searchForm.chain);
                  }}
                >
                  {to_address}
                </p>
              </Col>
            </Row>
          </div>
          <div className="transactionColumn">
            <Row>
              <Col md="4">
                <div className="supportText medium">Value:</div>
              </Col>
              <Col>
                <p className="supportText">
                  {getTokenFormattedNumber(
                    Number(value),
                    gas_metadata.contract_decimals
                  )}{' '}
                  {gas_metadata.contract_ticker_symbol} ({pretty_value_quote})
                </p>
              </Col>
            </Row>
          </div>
          <div className="transactionColumn">
            <Row>
              <Col md="4">
                <div className="supportText medium">Transaction Fee:</div>
              </Col>
              <Col>
                <p className="supportText">
                  {getTokenFormattedNumber(
                    fees_paid,
                    gas_metadata.contract_decimals,
                    false
                  )}{' '}
                  {gas_metadata.contract_ticker_symbol} ({pretty_gas_quote})
                </p>
              </Col>
            </Row>
          </div>
          <div className="transactionColumn">
            <Row>
              <Col md="4">
                <div className="supportText medium">Gas Price:</div>
              </Col>
              <Col>
                <p className="supportText">
                  {gasValueWeiToGwei(gas_price)} Gwei
                </p>
              </Col>
            </Row>
          </div>
          <div className="transactionColumn">
            <Row>
              <Col md="4">
                <div className="supportText medium"> Gas Limit & Usage:</div>
              </Col>
              <Col>
                <p className="supportText">
                  {gas_offered} | {gas_spent} (
                  {getPercentage(gas_spent, gas_offered)}
                  %)
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
