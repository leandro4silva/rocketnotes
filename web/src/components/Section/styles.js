import styled from "styled-components";


export const Container = styled.div`
    margin: 2.8rem 0;

    h2{
        font-size: 2rem;
        line-height: 2.6rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_100};  
        padding-bottom: 1.6rem;
        margin-bottom: 1.6rem;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    }
`