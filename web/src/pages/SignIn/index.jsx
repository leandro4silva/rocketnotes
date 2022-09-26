import { useState } from "react";
import { Container, Form, Background} from "./styles";
import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'

import { useForm } from "react-hook-form";

import { useAuth} from "../../hooks/auth";
import { Link } from "react-router-dom";


export function SignIn(){

    const [messageError, setMessageError] = useState("")

    const {register, handleSubmit, formState: {errors}} = useForm({
        email: "",
        password: ""
    })

    const { signIn } = useAuth()
    
    const handleSignIn = async (data) => {

        const {email, password} = data

        const error = await signIn({email, password})

        if(error){
           setMessageError(error)
        }
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit(handleSignIn)}>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <p className="error">{messageError ? `* ${messageError}` : null}</p>
            
                <Input 
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    error={errors.email?.message}
                    register={register('email', 
                    {required: 'Informe o email, por favor!'})} 
                /> 
                <p className="error">{errors.email?.message}</p>    

                <Input 
                    placeholder="Senha"
                    type="password"
                    error={errors.password?.message}
                    icon={FiLock} 
                    register={register('password', {required: 'Informe a sua senha, por favor!'})}
                />
                <p className="error">{errors.password?.message}</p>
                
                <Button title="Entrar" type="submit" ></Button>

                <Link to="/register">Criar conta</Link>

            </Form>

            <Background/>
            
        </Container>
    )
}