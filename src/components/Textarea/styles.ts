import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  color: #666360;
  border: 2px solid #232129;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #00b35c;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #00b35c;
      border-color: #00b35c;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #00b35c;
    `}

  textarea {
    flex: 1;
    background: transparent;
    border: 0;
    outline: 0;
    resize: vertical;
    color: #000;
    height: 200px;

    &::placeholder {
      color: #000;
    }

    svg {
      margin-right: 16px;
    }
  }
`;
