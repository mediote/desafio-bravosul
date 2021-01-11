import styled from 'styled-components';

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
  justify-content: space-between;
  align-items: center;

  > img {
    height: 40px;
  }
`;

export const HeaderLinks = styled.div`
  a {
    padding: 5px;
    text-decoration: none;
    font-weight: bold;
    color: #000;
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
  width: 86%;
  margin-top: 150px;
  margin-bottom: 50px;

  > strong {
    color: #999591;
    font-size: 24px;
    line-height: 26px;
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;

  height: 356px;
  max-width: 398px;
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
