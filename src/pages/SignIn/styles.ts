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
  > img {
    height: 150px;
    margin-bottom: 80px;
  }
  form {
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }
  > a {
    color: #00b35c;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#00b35c')};
    }
  }
`;
