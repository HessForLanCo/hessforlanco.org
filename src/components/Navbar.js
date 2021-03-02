import styled from '@emotion/styled';

import { size } from '../theme';

import logoImage from '../static/img/HessForController.svg';

const Nav = styled.nav`
  height: ${size.navbarHeight}px;
  img {
    height: 100%;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <img src={logoImage} alt="Hess for Controller logo" />
    </Nav>
  );
}
