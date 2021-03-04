import Link from 'next/link';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { size, color } from '../theme';

import logoImage from '../static/img/HessForController.svg';
const logoImageAlt = "Hess for Controller logo";

const socialLinks = [
  {
    icon: faFacebookF,
    url: 'https://www.facebook.com/HessForLanCo/'
  },
  {
    icon: faTwitter,
    url: '#'
  }
];

const Nav = styled.nav`
  height: ${size.navbarHeight}px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavHeader = styled.div`
  flex: 1 0 auto;
  height: 100%;
  img {
    height: 100%;
    width: auto;
  }
`;

const NavSocialIcons = styled.div`
  font-size: ${size.fontLarge}px;
  margin-right: 32px;
`;

const SocialIconLink = styled.a`
  color: ${color.primary};
  display: inline-block;
  padding: 16px;
  &:hover {
    color: ${color.secondary};
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
      <NavSocialIcons>
        {socialLinks.map(link => (
          <SocialIconLink key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={link.icon} />
          </SocialIconLink>
        ))}
      </NavSocialIcons>
    </Nav>
  );
}
