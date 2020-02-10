import styled from 'styled-components';

const StyledHero = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: #57b0fb;
    background: url(/images/sky-lines.svg) no-repeat; // background by SVGBackgrounds.com
    background-size: cover;
    .mountains {
        width: 100%;
        height: 100%;
        grid-area: 3 / 1 / 6 / 6;
        object-fit: cover;
        overflow: visible;
    }

    @media(max-width: 550px) {
        .mountains {
            grid-area: 4/1/6/6;
            test-stuff: here;
        }
    }
`;

export default StyledHero;
