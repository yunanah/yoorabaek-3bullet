import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  color: #020202;
  background-color: #fff;
  position: fixed;
  left: 0;
  height: 100vh;
  width: 25%;
  padding: 50px 20px 20px 80px;

  @media screen and (max-width: 820px) {
    position: relative;
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: flex-start;
    width: 100vw;
    height: 300px;
    padding: 30px;
  }
`;
export const Logo = styled.span`
  /* margin-left: 30px; */
  font-size: 20px;
  text-align: center;

  @media screen and (max-width: 820px) {
    /* margin-left: 8px; */
    font-size: 0.9em;
  }
`;
export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 80px;
  /* margin-left: 30px; */

  @media screen and (max-width: 820px) {
    margin-top: 32px;
    align-items: flex-end;
    /* margin-left: 24px; */
  }
`;
export const MenuItem = styled.li`
  margin-bottom: 16px;
  font-size: 20px;

  @media screen and (max-width: 820px) {
    font-size: 1.2em;
  }
`;

export const LinkedMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 100px;
  /* margin-left: 30px; */
`;
export const LinkedItem = styled.a`
  margin-bottom: 16px;
  font-size: 20px;
  text-decoration: underline;
`;

export const MobileLinkedMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 32px;
  font-size: 18px;
`;
