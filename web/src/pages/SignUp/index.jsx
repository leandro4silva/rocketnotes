import { Container, Form, Background} from "./styles";
import { Input } from '../../components/Input'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { ButtonText } from "../../components/ButtonText";

import { Link } from "react-router-dom";


export function SignUp(){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={FiUser} 
                /> 

                <Input 
                    placeholder="Email"
                    type="text"
                    icon={FiMail} 
                />     

                <Input 
                    placeholder="Senha"
                    type="password"
                    icon={FiLock} 
                />
                <Button title="Cadastrar" type="submit"></Button>

                <Link to="/">Voltar para o login</Link>
            </Form>           
        </Container>
    )
}