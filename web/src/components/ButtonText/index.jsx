import { Container } from "./styles";


export function ButtonText({title, icon:Icon, isActive = false, ...rest}){
    return(
        <Container type="button" {...rest} isActive={isActive}>
            {
                Icon ? <Icon size={24}/> : title
            }
        </Container>
    )
}