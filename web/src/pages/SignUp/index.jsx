import { useState, Fragment } from "react";

import { Container, Form, Background, MessageSuccess } from "./styles";

import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Alert } from "../../components/Alert";

import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";


export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate =  useNavigate()

    const [messageError, setMessageError] = useState("")
    const [messageSuccess, setMessageSuccess] = useState("")

    function handleSignUp(event) {
        event.preventDefault()
        setMessageError("")

        if (!name || !email || !password) {
            setMessageError("Preencha todos os campos")
            return
        }

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
            <Form messageSuccess={messageSuccess}>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                {      
                    messageSuccess == "" ? 
                    <Fragment>
                        <h2>Crie sua conta</h2>
                        {
                            messageError != "" ?
                            <div className="error">
                                <Alert message={messageError} isAlert />
                            </div>
                            : null
                        }
                        <Input
                            placeholder="Nome"
                            type="text"
                            icon={FiUser}
                            onChange={e => setName(e.target.value)}
                        />
        
                        <Input
                            placeholder="Email"
                            type="text"
                            icon={FiMail}
                            onChange={e => setEmail(e.target.value)}
                        />
        
                        <Input
                            placeholder="Senha"
                            type="password"
                            icon={FiLock}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Button title="Cadastrar" type="submit" onClick={handleSignUp}></Button>
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