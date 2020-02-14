import styled from 'styled-components';

const StyledFooter = styled.section`
    padding-top: 32px;
    padding-bottom: 24px;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary[900]};
    background: linear-gradient(30deg, ${({ theme }) => theme.colors.primary[900]} 0%, ${({ theme }) => theme.colors.primary[800]} 65%, ${({ theme }) => theme.colors.primary[700]} 100%);
    .img-and-text-container {
        margin-left: 10%;
        margin-right: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: background: ${({ theme }) => theme.colors.primary[900]};
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
        width: 100%;
        display: flex;
        list-style: none;
        display: flex;
        justify-content: center;
        .ftr-social-icon {
            fill: white;
            height: 48px;
            transition-duration: 0.2s;
        }
        .ftr-social-icon:hover {
            fill: #A5B2BD;
            transform: scale(1.4);
            transition-duration: 0.2s;
        }
        a {
            font-size: 0px;
        }
        li {
            margin-left: 28px;
        }
        .first {
            margin-left: 0;
        }
    }
    @media(max-width: 1280px) {
        height: 100%;
        p {
            font-size: ${({ theme }) => theme.typography.fontSize[4]}px;
        }
        ul {
            margin-top: 12px;
        }
    }
    @media(max-width: 835px) {
        height: 100%;
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
        ul {
            padding-right: 18px;
        }
    }
`;

export default StyledFooter;
