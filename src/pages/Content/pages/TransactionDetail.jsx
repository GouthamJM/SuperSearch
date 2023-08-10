import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import moment from 'moment';
import { formatUnits } from 'ethers';
import { divide } from 'lodash';
/*
{
    "block_signed_at": "2023-08-09T12:45:59Z",
    "block_height": 17877434,
    "tx_hash": "0x39151af6ba02ac5e3169ff145111137c0186d7b802608e174ea460d4246cbea1",
    "tx_offset": 177,
    "successful": true,
    "from_address": "0x199d5ed7f45f4ee35960cf22eade2076e95b253f",
    "from_address_label": null,
    "to_address": "0x87b3f3c934a13c779e100a5d6e6d7ef577e86671",
    "to_address_label": null,
    "value": "35345563466541400",
    "value_quote": 65.92058041395804,
    "pretty_value_quote": "$65.92",
    "gas_metadata": {
        "contract_decimals": 18,
        "contract_name": "Ether",
        "contract_ticker_symbol": "ETH",
        "contract_address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        "supports_erc": null,
        "logo_url": "https://www.datocms-assets.com/86369/1669653891-eth.svg"
    },
    "gas_offered": 21000,
    "gas_spent": 21000,
    "gas_price": 27601378543,
    "fees_paid": "579628949403000",
    "gas_quote": 1.0810261040412639,
    "pretty_gas_quote": "$1.08",
    "gas_quote_rate": 1865.03125,
    "log_events": []
}
*/

export const gasValueWeiToGwei = (weiValue) => {
  return formatUnits(weiValue, 'gwei');
};

export const getTokenFormattedNumber = (
  value,
  decimals = 18,
  roundOff = true,
  fractions = 0
) => {
  const _decimals = decimals || 18;
  const _value = value || 0;
  const _expoValue = Math.pow(10, _decimals);
  let _calculated = _value / _expoValue;
  if (!roundOff) {
    return Number(_calculated);
  }
  let _decimalFixed = fractions;
  if (fractions == 0) {
    _decimalFixed = 2;
    if (_calculated < 100) {
      _decimalFixed = 6;
    }
  }
  const expo = Math.pow(10, _decimalFixed);
  _calculated = Math.floor(_calculated * expo) / expo;
  return Number(_calculated.toFixed(_decimalFixed));
};

export const formatDateTime = (str) => {
  return moment.unix(str).format('MMM DD, YYYY h:mm A');
};

export const formatDate = (str, isWithTime = false, isWithSuffix = false) => {
  return moment(str).format(
    `${
      isWithTime && isWithSuffix
        ? 'MMM DD, YYYY h:mm A'
        : isWithTime
        ? 'ddd DD MMM YYYY, HH:mm:ss'
        : 'MMM DD, YYYY'
    }`
  );
};

export const getPercentage = (
  numerator,
  denominator,
  options = { decimal: 2 }
) => {
  if (denominator === 0) return 0;
  return Number(
    (divide(numerator, denominator) * 100).toFixed(options.decimal)
  );
};

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
