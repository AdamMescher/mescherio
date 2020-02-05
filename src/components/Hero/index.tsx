import React from 'react';
import StyledHero from './styled';
import Wordmark from '../Wordmark';


const Hero = () => (
  <StyledHero>
    <img className="mountains" src="/images/flat-mountains-grey.svg" alt="" />
    <Wordmark />
  </StyledHero>
);

export default Hero;
