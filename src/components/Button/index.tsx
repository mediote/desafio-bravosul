import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

// eslint-disable-next-line react/prop-types
const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Container type="button" {...rest}>
    {loading ? 'Carregando ... ' : children}
  </Container>
);

export default Button;
