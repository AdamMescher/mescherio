import styled from 'styled-components';

const StyledAbout = styled.section`
    padding: 32px 0 32px 0;
    background: url(images/funky-lines.png);
    display: flex;
    .img-container {
        width: 40%;
        margin-left: 32px;
        width: calc(40% - 32px);
    }
    img {
        width: 100%;
        max-height: 375px;
        min-width: 150px;
    }
    .text-container {
        margin-right: 32px;
        width: calc(60% - 32px);
        padding: 0 5rem 0 5rem;
        display: flex;
        align-items: center;
    }
    p {
        display: flex;
        font-size: 36px;
        line-height: 1.25;
    }
    @media(max-width: 1280px) {
        p {
          font-size: 30px;
        }
      }
    @media(max-width: 985px) {
        p {
          font-size: 24px;
        }
      }
    @media(max-width: 835px) {
        flex-direction: column;
        align-items: center;
        .img-container {
          margin: 0;
        }
        .text-container {
          width: 100%;
          padding: 1rem 3rem 0 3rem;
          margin: 0;
        }
        p {
          font-size: 20px;
        }
      }
    @media(max-width: 650px) {
        p {
            font-size: 20px;
        }
    }
`;

export default StyledAbout;
