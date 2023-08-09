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
    <div className="neuomorphicBtn neuomorphicBtn__secondary" {...rest}>
      <p>{children}</p>
    </div>
  );
}

export { ButtonP, ButtonS };
