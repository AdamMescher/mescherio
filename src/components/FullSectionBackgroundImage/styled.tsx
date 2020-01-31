import styled from 'styled-components';

const StyledFullSectionBackgroundImage = styled.img`
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: ${({ theme }) => theme.utilities.zIndex[1]};
`;

export default StyledFullSectionBackgroundImage;
