import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import { formatDate } from '../../utils';

export default function BlockPage({ updated_at, chain_id, chain_name, items }) {
  return (
    <div>
      <div>
        <Container className="ss-p-0">
          <div className="transactionColumn">
            <Row>
              <Col md="4">
                <div className="supportText medium">Chain name:</div>
              </Col>
              <Col>
                <p className="supportText">{chain_name}</p>
              </Col>
            </Row>
          </div>
          <div className="transactionColumn">
            <Row>
              <Col md="4">
                <div className="supportText medium">Chain id:</div>
              </Col>
              <Col>
                <p className="supportText">{chain_id}</p>
              </Col>
            </Row>
          </div>
          <div className="transactionColumn">
            <Row>
              <Col md="4">
                <div className="supportText medium">Updated at:</div>
              </Col>
              <Col>
                <p className="supportText">{formatDate(updated_at)}</p>
              </Col>
            </Row>
          </div>
          {items?.length
            ? items.map(({ signed_at, height }, key) => (
                <>
                  <div key={key} className="transactionColumn">
                    <Row>
                      <Col md="4">
                        <div className="supportText medium">Signed at:</div>
                      </Col>
                      <Col>
                        <p className="supportText">{formatDate(signed_at)}</p>
                      </Col>
                    </Row>
                  </div>
                  <div key={key} className="transactionColumn">
                    <Row>
                      <Col md="4">
                        <div className="supportText medium">Height:</div>
                      </Col>
                      <Col>
                        <p className="supportText">{height}</p>
                      </Col>
                    </Row>
                  </div>
                </>
              ))
            : null}
        </Container>
      </div>
    </div>
  );
}
