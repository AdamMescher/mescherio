import styled from 'styled-components';

const StyledAbout = styled.section`
    height: 50vh;
    width: 100%;
    // background-color: ${({ theme }) => theme.colors.neutral.ash[200]};
    background: url(images/funky-lines.png);
    display: flex;
    align-items: center;
    h2 {
        padding-top: 36px;
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: ${({ theme }) => theme.typography.fontSize[7]}px;
    }
    .text-and-img-container {
        height: 80%;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .img-container {
        align-items: center;
        margin-left: 10%;
        width: 20%;
        height: 100%;
    }
    .text-container {
        width: 40%;
        height: 100%;
        margin-right: 15%;
        display: flex;
        align-items: center;
    }
    img {
        height: 100%;
    }
    p {
        font-size: ${({ theme }) => theme.typography.fontSize[6]}px;
    }
`;

export default StyledAbout;
