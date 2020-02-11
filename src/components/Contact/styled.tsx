import styled from 'styled-components';

const StyledContact = styled.section`
    background: url(images/wavey.svg);
    padding-top: 18px;
    padding-bottom: 18px;
    color: ${({ theme }) => theme.colors.neutral.ash[300]};
    h2 {
        text-align: center;
        font-size: ${({ theme }) => theme.typography.fontSize[8]}px;
        font-weight: ${({ theme }) => theme.typography.fontWeight[500]};
    }
    .txt-and-img-cont {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p {
        font-size: ${({ theme }) => theme.typography.fontSize[6]}px;
    }
    p a {
        color: ${({ theme }) => theme.colors.neutral.ash[200]};
        font-weight: ${({ theme }) => theme.typography.fontWeight[500]};
    }
    .email {
        margin-top: ${({ theme }) => theme.spacing[4]}px;
        margin-right: ${({ theme }) => theme.spacing[8]}px;
    }
    p a:hover {
        color: ${({ theme }) => theme.colors.primary[400]};
    }
    img {
        height: 250px;
    }
    @media(max-width: 950px) {
        h2 {
            font-size: ${({ theme }) => theme.typography.fontSize[7]}px;
        }
        p {
            font-size: ${({ theme }) => theme.typography.fontSize[5]}px;
        }
    }
    @media(max-width: 835px) {
        h2 {
            margin-bottom: 18px;
        }
        .txt-and-img-cont {
            flex-direction: column;
        }
        .email {
            margin: 12px 0 24px 0;
        }
    }
`;

export default StyledContact;
