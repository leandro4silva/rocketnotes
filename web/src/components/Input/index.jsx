import { Container } from "./styles";

export function Input({icon: Icon, error, register, ...rest}){


    return(
        <Container error={error}>
            { Icon && <Icon size={20}/>}
            <input {...rest} {...register} />
        </Container>
    )
}