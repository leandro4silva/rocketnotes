import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles"

import { useAuth } from '../../hooks/auth'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { api } from '../../services/api'

export function Header(){
    const {user, signOut} = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt={`Imagem de ${user.name}`} />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout title='Logout' onClick={signOut}>
                <RiShutDownLine></RiShutDownLine>
            </Logout>
        </Container>
    )
}