import React from 'react';
import StyledHero from './styled';
import Logo from '../Logo';


const Hero = () => (
  <StyledHero>
    <div className="bg-img-blur" />
    <img className="mountains" src="/images/flat-mountains-grey.svg" alt="" />
    <Logo />
  </StyledHero>
);

export default Hero;
