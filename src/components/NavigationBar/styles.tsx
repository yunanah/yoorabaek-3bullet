import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  color: #020202;
  background-color: #fff;
  position: fixed;
  left: 0;
  height: 100vh;
  padding: 32px;

  @media screen and (max-width: 820px) {
    position: relative;
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: flex-start;
    height: 300px;
  }
`;
export const Logo = styled.span`
  margin-left: 30px;
  font-size: 1.2em;
  text-align: center;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 80px;
  margin-left: 30px;
`;
export const MenuItem = styled.div`
  margin-bottom: 16px;
  font-size: 1em;
`;
