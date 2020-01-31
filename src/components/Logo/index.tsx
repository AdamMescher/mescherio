import React from 'react';
import StyledLogo from './styled';

const Logo = () => (
  <StyledLogo className="logo-container">
    <img className="laptop" src="/images/laptop-logo.svg" alt="" />
    <div className="title-container">
      <h1>Adam Mescher</h1>
      <h2>// Front End Developer</h2>
    </div>
  </StyledLogo>
);

export default Logo;
