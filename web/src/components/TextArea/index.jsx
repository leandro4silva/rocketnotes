import { Container } from "./styes";


export function TextArea({error, register, ...rest}){
    return(
        <Container {...rest} {...register} error={error} />
    )
}