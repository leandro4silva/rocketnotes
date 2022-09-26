import { useState, Fragment } from "react";

import { Container, Form, Background, MessageSuccess } from "./styles";


import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Alert } from "../../components/Alert";

import { Link } from "react-router-dom";
import { api } from "../../services/api";

import { useForm } from 'react-hook-form'


export function SignUp() {
    const [messageSuccess, setMessageSuccess] = useState("")
    const [messageError, setMessageError] = useState("")

    const {handleSubmit, register, formState: {errors}} = useForm({
        name: "",
        email: "",
        password: ""
    })

    const onSubmit = (data) => {

        const {name, email, password} = data

        api.post("/users", { name, email, password })
            .then(() => {       
                setMessageSuccess(`Usuario foi cadastrado com sucesso!`)    
            })
            .catch(error => {
                if (error.response) {
                    setMessageError(error.response.data.message)
                } else {
                    setMessageError("Não foi possivel cadastrar")
                }
            })
    }

    return (
        <Container>
            <Background />
            <Form messageSuccess={messageSuccess} onSubmit={handleSubmit(onSubmit)}>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                {      
                    messageSuccess == "" ? 
                    <Fragment>
                        <h2>Crie sua conta</h2>

                        <p className="error">{messageError ? `* ${messageError}` : null}</p>
    
                        <Input
                            placeholder="Nome"
                            type="text"
                            icon={FiUser}
                            error={errors.name?.message}
                            register={register('name', 
                            {required: 'Informe o seu nome, por favor!'})}
                        />
                        <p className="error">{errors.name?.message}</p>
                        <Input
                            placeholder="Email"
                            type="text"
                            icon={FiMail}
                            error={errors.email?.message}
                            register={register('email', 
                            {required: 'Informe o seu email, por favor!'})}
                        />
                        <p className="error">{errors.email?.message}</p>
        
                        <Input
                            placeholder="Senha"
                            type="password"
                            error={errors.password?.message}
                            register={register('password', {required: 'Preencha a senha, por favor!'})}
                            icon={FiLock}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <p className="error">{errors.password?.message}</p>
                        <Button title="Cadastrar" type="submit"></Button>
                    </Fragment>
                    
                    : 

                    <MessageSuccess>
                        <p>{messageSuccess}</p>
                    </MessageSuccess>
                }
                <Link to="/">Voltar para o login</Link>
            </Form>
        </Container>
    )
}