import styled from "styled-components";

export const Container = styled.span`
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({isAlert}) => isAlert ? "red" : "transparent"};
    font-size: 1.4rem;
    padding-block: 2rem;
    font-weight: 700;
    border-radius: 0.4rem;
`