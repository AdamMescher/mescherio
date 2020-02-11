import * as React from 'react';
import StyledFooter from './styled';
import SocialLinkList from '../SocialLinkList';

const Footer = () => (
  <footer>
    <StyledFooter>
      <div className="img-and-text-container">
        <img className="headshot" src="/images/professional-headshot.jpg" alt="" />
        <p>
            Raised in Raleigh, North Carolina and stayed for school at North Carolina State University. Developing in Denver, CO since 2017. Catch me on powder days at Copper Mountain. During the warmer months, you might find me playing spikeball, volleyball, or ultimate frisbee in Wash Park.
        </p>
      </div>
      <ul>
        <li>
          <a href="https://www.github.com/adammescher">
        GitHub
            <svg className="ftr-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32A227 227 0 0032 262a229 229 0 00157 218c8 0 12-6 12-11l-1-39-22 2c-44 0-53-33-53-33-11-27-25-34-25-34-20-14 0-14 1-14 23 2 35 24 35 24 11 19 26 25 39 25 11 0 20-4 26-6 2-15 8-25 14-31-50-6-102-25-102-113 0-25 9-46 23-62-2-6-10-29 2-61h5c8 0 27 3 57 24a210 210 0 01112 0c30-21 48-24 57-24h5c12 32 4 55 2 61 14 16 23 37 23 62 0 88-53 107-103 113 8 7 16 21 16 43l-1 63c0 5 3 11 12 11h4c89-31 153-117 153-218 0-127-100-230-224-230z" /></svg>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/adammescher">
        LinkedIn
            <svg className="ftr-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M417 64H97c-18 0-33 13-33 30v321c0 17 15 33 33 33h320c18 0 31-16 31-33V94c0-17-13-30-31-30zM183 384h-55V213h55v171zm-26-197c-18 0-29-13-29-29 0-17 12-30 30-30s29 13 29 30c0 16-11 29-30 29zm227 197h-55v-93c0-23-8-38-28-38-15 0-24 10-28 20-2 4-2 9-2 14v97h-55V213h55v24c8-12 21-28 50-28 36 0 63 24 63 75v100z" /></svg>
          </a>
        </li>
        <li>
          <a href="https://www.codepen.io/adammescher">
        CodePen
            <svg className="ftr-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M241 304l-46-31h-5l-39 26 93 62v-53c0-2-2-3-3-4zm-46-63l46-31c2-1 3-4 3-6v-51l-93 62 40 26h4zm75-32a4522 4522 0 0047 32h4l40-26-93-63v54l2 3zm-12 21l-5 1-14 9-25 17 39 26h6l39-26-40-27zm-117 7v40l30-20z" />
              <path d="M256 32a224 224 0 100 448 224 224 0 000-448zm139 265c0 6-3 10-8 13a38020 38020 0 00-123 82c-6 4-11 4-17 0l-122-82c-6-3-8-7-8-13v-80c0-6 3-10 8-14l122-81c6-4 11-4 17 0a41090 41090 0 00124 82c4 3 7 7 7 12v81z" />
              <path d="M316 273a3826 3826 0 01-45 31c-3 1-3 3-3 6v51l93-62-38-26h-7zm54 4v-40l-30 20z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/adammescher">
        Twitter
            <svg className="ftr-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 110c-17 7-36 12-56 15 20-12 36-31 43-54-19 11-39 19-61 24a97 97 0 00-165 88c-81-4-152-43-200-101a97 97 0 0030 129c-16 0-31-5-44-12v1c0 47 33 86 78 95a97 97 0 01-44 2c12 38 48 66 91 67a194 194 0 01-144 40 274 274 0 00424-245c19-13 35-30 48-49z" /></svg>
          </a>
        </li>
      </ul>
    </StyledFooter>
  </footer>
);

export default Footer;
