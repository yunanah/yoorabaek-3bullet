import React from 'react';

import { Container, Logo, Menu, MenuItem } from './styles';

const NavigationBar: React.FC = () => {
  return (
    <>
      <Container>
        <Logo>
          yoorabaek
          <br /> x <br />
          3bullet
        </Logo>
        <Menu>
          <MenuItem>Hello</MenuItem>
          <MenuItem>Inside my day</MenuItem>
          <MenuItem>See more</MenuItem>
        </Menu>
      </Container>
    </>
  );
};

export default NavigationBar;
