// import useWindowSize from '../../hooks/useWindowSize';
import { Link } from 'react-router-dom';

import {
  Container,
  LinkedItem,
  LinkedMenu,
  Logo,
  Menu,
  MenuItem,
  MobileLinkedMenu,
} from './styles';

const NavigationBar: React.FC = () => {
  // const size = useWindowSize();
  let mobile = false;

  return (
    <>
      <Container>
        <Logo>
          yoorabaek
          <br /> x <br />
          3bullet
        </Logo>
        {mobile && (
          <MobileLinkedMenu>
            <LinkedItem>Github →</LinkedItem>
            <LinkedItem>Tistory →</LinkedItem>
            <LinkedItem>contact →</LinkedItem>
          </MobileLinkedMenu>
        )}

        <Menu>
          <MenuItem>
            <Link to="/">Hello</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/dayta">Inside my day</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/portpolio">See more</Link>
          </MenuItem>
        </Menu>

        {mobile || (
          <LinkedMenu>
            <LinkedItem target="_blank" href="https://github.com/yunanah">
              Github
            </LinkedItem>
            <LinkedItem target="_blank" href="https://yunanah.tistory.com/">
              Tistory
            </LinkedItem>
            <LinkedItem href="mailto:bbyl6319@gmail.com">contact</LinkedItem>
          </LinkedMenu>
        )}
      </Container>
    </>
  );
};

export default NavigationBar;
