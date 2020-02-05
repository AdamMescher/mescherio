import React from 'react';
import StyledWordmark from './styled';
import SocialLinkList from '../SocialLinkList';

const Wordmark = () => (
  <StyledWordmark className="logo-container">
    <div className="title-container">
      <h1>Adam Mescher</h1>
      <h2>// Front End Developer</h2>
      <SocialLinkList />
    </div>
  </StyledWordmark>
);

export default Wordmark;
