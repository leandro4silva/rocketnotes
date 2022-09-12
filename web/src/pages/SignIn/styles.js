import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
`


export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1{
        font-size: 4.8rem;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > h2{
        font-size: 2.4rem;
        margin-top: 4.8rem;
        margin-bottom: 4.8rem;       
    }

    > p{
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > button:nth-last-child(1){
        margin-top: 4.8rem;
    }

    >a{
        margin-top: 8rem;
        color: ${({theme}) => theme.COLORS.ORANGE };
        font-size: 1.6rem;
    }

`


export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

`