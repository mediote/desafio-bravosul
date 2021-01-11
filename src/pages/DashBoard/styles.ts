import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  width: 100%;
  padding: 32px 0;
  background: #ffff;
  position: fixed;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    height: 40px;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    line-height: 24px;
  }
  span {
    color: #000000;
  }
  a {
    text-decoration: none;

    color: #00b35c;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Content = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 16px;
  width: 75%;
  margin-top: 250px;
  margin-bottom: 50px;

  > strong {
    color: #999591;
    font-size: 24px;
    line-height: 26px;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > button {
    position: fixed;
    margin-top: -70px;
    background: #00b35c;
    color: #fff;

    &:hover {
      background: ${shade(0.2, '#00b35c')};
    }
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  height: 356px;
  max-width: 350px;
  background: #ffffff;
  border: 1px solid #ebebeb;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 20px;
  box-shadow: none;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  p {
    margin-bottom: 30px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;

    > button {
      width: 100px;
      height: 30px;
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
`;
