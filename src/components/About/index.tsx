import React from 'react';
import StyledAbout from './styled';

const About = () => (
  <StyledAbout>
    <div className="img-container">
      <img src="/images/productivity.svg" alt="" />
    </div>
    <div className="text-container">
      {/* eslint-disable-next-line max-len */}
      <p>I am a determined and resilient developer with a tendency to move fast and break things. My ambition is to build user experiences that engage and excite users. I&apos;m looking to collaborate in a team environment that pushes everyone to the next level.</p>
    </div>
  </StyledAbout>
);

export default About;
