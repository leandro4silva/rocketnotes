import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }


    /* width */
    ::-webkit-scrollbar {
        width: .8rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
        
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: red; 
        border-radius: 10px;
        background: ${({theme})=> theme.COLORS.GRAY_300};
        transition: filter 0.2;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        filter: brightness(0.9);
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea{
        font-family: 'Roboto Slab', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }

`