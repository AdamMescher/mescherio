import styled from 'styled-components';

const StyledHero = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: #57b0fb;
    background: url(/images/sky-lines.svg) no-repeat;
    background-size: cover;

    .bg-img-blur {
        width: 100%;
        height: 100%;
        filter: blur(1.5rem);
    }

    .mountains {
        width: 100%;
        height: 100%;
        grid-area: 3 / 1 / 6 / 6;
        object-fit: cover;
        overflow: visible;
    }
`;

export default StyledHero;
