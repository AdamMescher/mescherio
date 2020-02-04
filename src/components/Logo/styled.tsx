import styled from 'styled-components';

const StyledLogo = styled.div`
    grid-area: 1 / 1 / 5 / 6;
    display: flex;
    align-items: center;

    width: 100%;
    h1,
    h2 {
        color: white;
        margin-left: ${({ theme }) => theme.spacing[8]}px;
    }

    h1 {
        font-weight: ${({ theme }) => theme.typography.fontWeight[700]};
        font-size: ${({ theme }) => theme.typography.fontSize[9]}px;
        white-space: nowrap;
    }

    h2 {
        font-weight: ${({ theme }) => theme.typography.fontWeight[300]};
        font-size: ${({ theme }) => theme.typography.fontSize[7]}px;
        white-space: nowrap;
    }

    .laptop {
        height: 128px;
        filter: invert(1);
        margin-left: ${({ theme }) => theme.spacing[7]}px;
    }
`;

export default StyledLogo;
