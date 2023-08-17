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
                <span className="ss-me-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M8 1.5C4.41594 1.5 1.5 4.41594 1.5 8C1.5 11.5841 4.41594 14.5 8 14.5C11.5841 14.5 14.5 11.5841 14.5 8C14.5 4.41594 11.5841 1.5 8 1.5ZM11.3828 5.82156L7.18281 10.8216C7.13674 10.8764 7.07941 10.9208 7.01471 10.9516C6.95001 10.9823 6.87945 10.9989 6.80781 11H6.79938C6.72929 11 6.66 10.9852 6.59599 10.9567C6.53198 10.9282 6.47468 10.8865 6.42781 10.8344L4.62781 8.83438C4.5821 8.78589 4.54654 8.72876 4.52322 8.66633C4.4999 8.60391 4.4893 8.53745 4.49203 8.47087C4.49477 8.40429 4.51078 8.33892 4.53914 8.27862C4.56749 8.21831 4.60761 8.16429 4.65715 8.11971C4.70668 8.07514 4.76463 8.04091 4.82757 8.01905C4.89052 7.99719 4.95721 7.98813 5.02371 7.9924C5.09021 7.99668 5.15518 8.01421 5.21481 8.04396C5.27444 8.0737 5.32752 8.11507 5.37094 8.16562L6.78625 9.73812L10.6172 5.17844C10.7031 5.07909 10.8247 5.01754 10.9556 5.00711C11.0866 4.99668 11.2164 5.03819 11.317 5.12268C11.4175 5.20717 11.4808 5.32784 11.4931 5.45862C11.5055 5.5894 11.4658 5.71977 11.3828 5.82156Z"
                      fill="#ABE4B8"
                    />
                  </svg>
                </span>
                <p
                  className="supportText d-sm-inline"
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
