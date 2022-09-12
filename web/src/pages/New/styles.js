import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 'header'
                         'content';

    
    .tags{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
`

export const Form = styled.form`
        grid-area: content;
        overflow-y: auto;
        padding: 6.4rem 0;
`


export const Content = styled.div`
    width: 55rem;
    margin-inline: auto;

    >header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3.6rem;

        h1{
            font-size: 3.6rem;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
        
        a{
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

`