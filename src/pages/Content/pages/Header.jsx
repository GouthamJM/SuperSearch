import React from 'react';
import Input from '../components/Input';
import { ButtonL, ButtonP, ButtonS } from '../components/Button';
import { useGlobalContext } from '../context/globalContext';
import { allPages } from '../InjectMaster';
import Dropdown from '../components/Dropdown';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../components/Title';
import { getSearchType, searchTypes } from '../utils';

export default function Header(type = 'home') {
  const { updateStep, updateSearchForm, state, resetSearchForm } =
    useGlobalContext();

  const [chain, setChain] = React.useState(state.searchForm.chain);
  const [search, setSearch] = React.useState(state.searchForm.search);

  const onStateSubmit = () => {
    const searchType = getSearchType(search);
    updateSearchForm(search, chain, searchType);
    if (searchType === searchTypes.address) {
      updateStep(allPages.wallet);
    } else if (searchType === searchTypes.transactionHash) {
      updateStep(allPages.transaction);
    }
  };

  const handleClear = () => {
    setSearch('');
    if (type === 'transaction' || type === 'wallet') {
      resetSearchForm();
    }
  };

  const handleGoBack = () => {
    updateStep(allPages.home);
    resetSearchForm();
  };

  return (
    <>
      <div className="pb-2">
        <Title />
      </div>
      <div className="pb-2">
        <Container className="pb-3">
          <Row className="align-items-center">
            <Col md={8} className="pr-0">
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            <Col md={4}>
              <Dropdown
                value={chain.name}
                onChange={(item) => {
                  setChain(item);
                }}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md="auto">
              <Row className="align-items-center justify-content-start">
                <Col md="auto">
                  <ButtonP onClick={onStateSubmit}>Search</ButtonP>
                </Col>
                <Col md="auto">
                  <ButtonL onClick={handleClear}>Clear</ButtonL>
                </Col>
              </Row>
            </Col>
            {(type === 'transaction' || type === 'wallet') && (
              <Col md="auto">
                <ButtonS onClick={handleGoBack}>Go Back</ButtonS>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}
