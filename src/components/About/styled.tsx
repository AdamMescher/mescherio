import styled from 'styled-components';

const StyledAbout = styled.section`
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
        margin-top: 32px;
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
        margin-left: 3%;
        display: flex;
        align-items: center;
    }
    img {
        height: 100%;
    }
    p {
        font-size: ${({ theme }) => theme.typography.fontSize[6]}px;
    }
    @media(max-width: 1024px) {
        .text-and-img-container {
            flex-direction: column;
            align-items: center;
        }
        .img-container {
            width: 100%;
            margin-left: 0;
        }
        img {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            width: 100%;
        }
        .text-container {
            margin: 0;
            width: 100%;
            margin-left: 20%;
            margin-right: 20%;
            padding-bottom: 24px;
        }
        p {
            margin-top: 24px;
            margin-left: 20%;
            margin-right: 20%;
            font-size: ${({ theme }) => theme.typography.fontSize[4]}px;
        }
    }
`;

export default StyledAbout;
