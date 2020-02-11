import * as React from 'react';
import StyledContact from './styled';

type ContactProps = {
  email: string,
};

const Contact = ({
  email,
}: ContactProps) => (
  <StyledContact>
    <h2>Like what you see?</h2>
    <p>I'd love to hear from you!</p>
    <p>
      Email me at
      <a href={`mailto:${email}`}>{email}</a>
    </p>
  </StyledContact>
);

export default Contact;
