import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-content: center;
  width: 100%;
`;

const appearFromLeft = keyframes`
  from {
    opacity:0;
    transform: translateX(-50px);
  }
  to {
    opacity:1;
    transform:translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    width: 400px;
    text-align: center;

    legend {
      margin-bottom: 24px;
    }

    input {
      margin-bottom: 24px;
    }

    textarea {
      margin-bottom: 24px;
    }

    > button {
      width: 250px;
      height: 50 px;
      border-radius: 10px;
      border: none;
      margin-left: 5px;
      background: #00b35c;
      color: #fff;
      text-transform: none;
      position: static;

      &:hover {
        background: ${shade(0.2, '#00b35c')};
      }
    }
  }
  > a {
    color: #00b35c;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#00b35c')};
    }
  }
`;
