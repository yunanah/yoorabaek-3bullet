import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  width: 75%;
  height: 100vh;
  padding: 50px 50px 20px 80px;

  @media screen and (max-width: 820px) {
    width: 100%;
    height: auto;
    padding: 0 20px;
  }
`;
