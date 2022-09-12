import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles"

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/leandro4silva.png" alt="Foto do usuario" />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Leandro Silva</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine></RiShutDownLine>
            </Logout>
        </Container>
    )
}