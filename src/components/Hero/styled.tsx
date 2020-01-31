import styled from 'styled-components';

const StyledHero = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 85vh;
    width: 100%;
    overflow: hidden;
    background-color: #57b0fb;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23005ca4' fill-opacity='0.18' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

    .mountains {
        width: 100%;
        height: 100%;
        grid-area: 2 / 1 / 4 / 4;
        object-fit: cover;
    }
`;

export default StyledHero;
