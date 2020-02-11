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
    <div className="txt-and-img-cont">
      <div className="txt-cont">
        <p>Id love to hear from you!</p>
        <p className="email">
          {'Email me at '}
          <a href={`mailto:${email}`}>{` ${email}`}</a>
        </p>
      </div>
      <img src="/images/contact.svg" alt="" />
    </div>
  </StyledContact>
);

export default Contact;
