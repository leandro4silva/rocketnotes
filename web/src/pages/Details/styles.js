import styled from 'styled-components'
import theme from '../../styles/theme';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 'header'
                         'content';
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};


    > main{
        grid-area: content;
        overflow-y: scroll;
        padding: 6.4rem 0;
    }


    .title-subtitle p{
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.8rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-family: Roboto, sans-serif;
    }
    
`;

export const Content = styled.div`
    max-width: 55rem;
    margin-inline: auto;
    
    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: flex-end;
        margin-bottom: 4.4rem;
    }

    > h1{
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.7rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: 1.6rem;
    }

    > p{
        font-size: 1.6rem;
        margin-top: 1.6rem;
        text-align: justify;
        font-family: Roboto, sans-serif;
    }
`

export const Links = styled.ul`
    list-style: none;


    > li{
        margin-top: 1.2rem;

        a{
            font-family: Roboto, sans-serif;
            font-weight: 400;
            line-height: 1.9rem;
            color: white;
        }
    }
`

