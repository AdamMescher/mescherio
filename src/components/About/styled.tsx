import styled from 'styled-components';

const StyledAbout = styled.section`
    height: 40vh;
    width: 100%;
    background-color: cyan;
    h2 {
        padding-top: 36px;
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: ${({ theme }) => theme.typography.fontSize[6]}px;
    }
    .text-and-img-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img {
        margin-left: 48px;
        height: 192px;
    }
    p {
        width: 50%;
        margin-right: 48px;
    }
`;

export default StyledAbout;
