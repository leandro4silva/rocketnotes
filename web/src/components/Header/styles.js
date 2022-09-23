import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;
    height: 10.5rem;
    width: 100%;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    padding: 0 8rem;
`


export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    
    > img{
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
        margin-right: .9rem;
    }

    > div{
        display: flex;
        flex-direction: column;
    }

    > div span{
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }   

    > div strong{
        font-size: 1.8rem;
        color: ${({theme}) => theme.COLORS.WHITE};
    }  

`

export const Logout = styled.button`
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    > svg{
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 3.6rem;
        cursor: pointer;
    }

`