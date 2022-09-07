import styled from 'styled-components'
import theme from '../../styles/theme';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 'header'
                         'content';

    .header{
        color: ${({theme}) => theme.COLORS.ORANGE};
        text-align: right;
        margin-bottom: 6.4rem;
    }

    .title-subtitle{
        margin-bottom: 5.4rem;
    }

    .title-subtitle h2{
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.7rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        margin-bottom: 1.6rem;
    }

    .title-subtitle p{
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.8rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-family: Roboto, sans-serif;
    }

    .links h2,
    .tags h2{
        font-size: 2rem;
        line-height: 2.6rem;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.GRAY_100};  
        padding-bottom: 1.6rem;
        border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};
    }

    .links ul{
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        margin-top: 1.6rem;
        margin-bottom: 2.8rem;
    }

    .links ul li{
        font-family: Roboto, sans-serif;
        font-weight: 400;
        line-height: 1.9rem;
        color: white;
    }

    .tags ul{
        display: flex;
        align-items: center;
        gap: 0.8rem;
        margin-top: 1.6rem;
        margin-bottom: 5.5rem;
    }

    .tags ul li{
        padding: 0.5rem 1.4rem;
        background-color: ${({theme}) => theme.COLORS.ORANGE};
        border-radius: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    }
`;
