import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonP(props) {
  let { children, ...rest } = props;
  return (
    <div class="d-grid">
      <button type="button" class="searchBtn searchBtn-primary" {...rest}>
        {children}
      </button>
    </div>
  );
}

function ButtonS(props) {
  let { children, ...rest } = props;
  return (
    <div class="d-grid">
      <button type="button" class="btn btn-secondary">
        Search
      </button>
    </div>
  );
}

function ButtonL(props) {
  let { children, ...rest } = props;
  return (
    <div class="d-grid">
      <Button {...rest} variant="light">
        {children}
      </Button>
    </div>
  );
}

export { ButtonP, ButtonS, ButtonL };
