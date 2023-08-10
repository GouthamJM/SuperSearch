import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonP(props) {
  let { children, ...rest } = props;
  return (
    <Button {...rest} variant="primary">
      {children}
    </Button>
  );
}

function ButtonS(props) {
  let { children, ...rest } = props;
  return (
    <Button {...rest} variant="secondary">
      {children}
    </Button>
  );
}

function ButtonL(props) {
  let { children, ...rest } = props;
  return (
    <Button {...rest} variant="light">
      {children}
    </Button>
  );
}

export { ButtonP, ButtonS, ButtonL };
