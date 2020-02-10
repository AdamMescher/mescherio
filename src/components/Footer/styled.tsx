import styled from 'styled-components';

const StyledFooter = styled.section`
    padding-top: 24px;
    padding-bottom: 24px;
    height: 35vh;
    background: ${({ theme }) => theme.colors.primary[900]};
    .img-and-text-container {
        margin-left: 10%;
        margin-right: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .headshot {
        height: 225px;
        border-radius: 8px;
    }
    .about-bullet-container {
        margin-top: 12px;
        margin-left: 24px;
        display: flex;
        align-items: center;
        img {
            width: 50px;
            max-height: 50px;
            object-fit: cover;
        }
        p {
            margin-left: 18px;
        }
    }
    p {
        color: ${({ theme }) => theme.colors.neutral.ash[300]};
        font-size: ${({ theme }) => theme.typography.fontSize[4]}px;
    }
    p span {
        background-color: blue;
        color: yellow;
        border-radius: 2px;
        font-family: monospace;
    }
    ul {
        margin-top: 12px;
        width: 100%;
        display: flex;
        list-style: none;
        display: flex;
        justify-content: center;
        .ftr-social-icon {
            fill: white;
            height: 48px;
        }
        .ftr-social-icon:hover {
            fill: #A5B2BD;
        }
        a {
            font-size: 0px;
        }
        li {
            margin-left: 28px;
        }
        ul:first-child {
            margin-left: 0;
        }
    }
`;

export default StyledFooter;
