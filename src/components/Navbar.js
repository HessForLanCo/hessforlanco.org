import Link from 'next/link';
import styled from '@emotion/styled';

import { size } from '../theme';

import logoImage from '../static/img/HessForController.svg';
const logoImageAlt = "Hess for Controller logo";

const Nav = styled.nav`
  height: ${size.navbarHeight}px;
  padding: 4px;
  display: flex;
`;

const NavHeader = styled.div`
  flex: 1 0 auto;
  img {
    height: 100%;
    width: auto;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavHeader>
        <Link href="/">
          <a>
            <img src={logoImage} alt={logoImageAlt} />
          </a>
        </Link>
      </NavHeader>
    </Nav>
  );
}
