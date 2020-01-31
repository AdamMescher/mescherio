import React from 'react';
import StyledHero from './styled';
import Logo from '../Logo';


const Hero = () => (
  <StyledHero>
    <img className="mountains" src="/images/flat-mountains-grey.svg" alt="" />
    <Logo />
  </StyledHero>
);

export default Hero;
