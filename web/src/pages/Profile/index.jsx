import { Container, Form, Avatar } from "./styles";
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/leandro4silva.png" alt="Foto do usuario" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file"/>
                    </label>
                </Avatar>

                <Input placeholder="Nome" type="text" icon={FiUser}></Input>
                <Input placeholder="Email" type="email" icon={FiMail}></Input>
                <Input placeholder="Senha atual" type="password" icon={FiLock}></Input>
                <Input placeholder="Nova senha" type="password" icon={FiLock}></Input>
                <Button title="Salvar" type="submit" disabled></Button>
            </Form>
        </Container>
    )
}