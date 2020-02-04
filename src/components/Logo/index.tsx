import React from 'react';
import StyledLogo from './styled';
import SocialLinkList from '../SocialLinkList';

const Logo = () => (
  <StyledLogo className="logo-container">
    <div className="title-container">
      <h1>Adam Mescher</h1>
      <h2>// Front End Developer</h2>
      <SocialLinkList />
    </div>
  </StyledLogo>
);

export default Logo;
