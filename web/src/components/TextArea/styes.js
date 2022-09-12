import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    min-height: 15rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};;
    border: none;
    resize: vertical;
    border-radius: 1rem;
    padding: 1.2rem;

    margin-bottom: .8rem;


    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};;
    }
`