import { Container } from "./styles";


export function Alert({message, isAlert, ...rest}){
    return(
        <Container isAlert={isAlert} {...rest}>
            {message}
        </Container>
    )
}