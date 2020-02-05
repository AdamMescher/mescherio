import styled from 'styled-components';

const StyledWordmark = styled.div`
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

    @media(max-width: 650px) {
        h1,h2 {
            margin-left: 16px;
            display: flex;
            justift-content: center;
            background-color: brown;
        }
        h1 {
            font-size: ${({ theme }) => theme.typography.fontSize[7]}px;
        }
        h2 {
            font-size: ${({ theme }) => theme.typography.fontSize[5]}px;
        }
    }
`;

export default StyledWordmark;
