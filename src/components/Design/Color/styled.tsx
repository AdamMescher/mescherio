import styled from 'styled-components';

const StyledColor = styled.article`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;

    color: grey;

    .color-container,
    .palette-container {
        height: 300px;
    }
    .color-container {
        display: flex;
        justify-content: center;
        width: 400px;
        align-items: center;
        font-size: ${(props) => props.theme.typography.fontSize[6]}px;
        border-top-left-radius: ${(props) => props.theme.borderRadius.medium};
        border-top-right-radius: ${(props) => props.theme.borderRadius.medium};
    }

    .palette-container {
        display: flex;
        flex-direction: row;
    }

    .palette-color {
        margin-top: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-grow: 1;
        width: 200px;
    }

    .palette-color:nth-child(1) {
        border-bottom-left-radius: ${(props) => props.theme.borderRadius.medium};
    }

    .palette-color:last-child {
        border-bottom-right-radius: ${(props) => props.theme.borderRadius.medium};
    }

`;

export default StyledColor;
