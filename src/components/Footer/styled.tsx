import styled from 'styled-components';

const StyledFooter = styled.section`
    padding-top: 32px;
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
    p {
        margin-left: 32px;
        width: 50%;
        color: ${({ theme }) => theme.colors.neutral.ash[300]};
        font-size: ${({ theme }) => theme.typography.fontSize[5]}px;
    }
    ul {
        padding-bottom: 18px;
        background: ${({ theme }) => theme.colors.primary[900]};
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
    @media(max-width: 1280px) {
        p {
            font-size: ${({ theme }) => theme.typography.fontSize[4]}px;
        }
        ul {
            margin-top: 12px;
        }
    }
    @media(max-width: 835px) {
        p {
            font-size: ${({ theme }) => theme.typography.fontSize[3]}px;
        }
    }
    @media(max-width: 650px) {
        height: 100%;
        .img-and-text-container {
            flex-direction: column;
            margin-bottom: 18px;
        }
        p {
            margin: 0;
            width: 80%;
            margin-top: 18px;
            margin-left: 10%;
        }
    }
`;

export default StyledFooter;
