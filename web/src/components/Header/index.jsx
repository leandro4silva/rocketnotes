import { Container, Profile } from "./styles"


export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/leandro4silva.png" alt="Foto do usuario" />
                <div>
                    <span>Bem-vindo</span>
                    <strong>Leandro Silva</strong>
                </div>
            </Profile>
        </Container>
    )
}