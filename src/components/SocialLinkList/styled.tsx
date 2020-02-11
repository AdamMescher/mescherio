import styled from 'styled-components';

const StyledSocialLinkList = styled.ul`
    list-style: none;
    display: flex;
    .social-icon {
        margin-top: 12px;
        margin-left: 18px;
        fill: white;
        height: 48px;
        transition-duration: 0.2s;
    }
    .social-icon:hover {
        fill: #A5B2BD;
        transform: scale(1.4);
        transition-duration: 0.2s;
    }
    a {
        font-size: 0px;
    }
    @media(max-width: 650px) {
        .social-icon {
            height: 40px;
            margin-left: 12px;
        }
    }
`;

export default StyledSocialLinkList;
