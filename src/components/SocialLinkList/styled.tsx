import styled from 'styled-components';

const StyledSocialLinkList = styled.ul`
    list-style: none;
    display: flex;
    .social-icon {
        margin-top: 12px;
        margin-left: 18px;
        fill: white;
        height: 48px;
    }
    .social-icon:hover {
        fill: #A5B2BD;
    }
`;

export default StyledSocialLinkList;
