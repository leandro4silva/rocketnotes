import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, Avatar } from "./styles";
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { ButtonText } from '../../components/ButtonText'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

export function Profile(){
    const navigate = useNavigate()

    const { user, updateProfile } = useAuth()
    
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)

    const [avatarFile, setAvatarFile] = useState()

    const [messageError, setMessageError] = useState()

    function handleBack(){
        navigate(-1)
    }

    async function handleUpdate(){
        const updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        const userUpdated = Object.assign(user, updated)

        const error = await updateProfile({user: userUpdated, avatarFile})

        if(error){
            return setMessageError(error)
        }
    }


    function handleChangeAvatar(event){
        const file = event.target.files[0];

        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)

        setAvatar(imagePreview)
    }
    
    return(
        <Container>
            <header>
                <ButtonText onClick={handleBack} icon={FiArrowLeft}>
                </ButtonText>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usuario" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file" onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>
                
                <p className="error">{messageError ? `* ${messageError}` : null}</p>

                <Input placeholder="Nome" type="text" value={name} onChange={e => setName(e.target.value)} icon={FiUser}></Input>
                <Input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} icon={FiMail}></Input>
                <Input placeholder="Senha atual" type="password" onChange={e => setOldPassword(e.target.value)} icon={FiLock}></Input>
                <Input placeholder="Nova senha" type="password" onChange={e => setNewPassword(e.target.value)} icon={FiLock}></Input>
                <Button 
                    title="Salvar" 
                    onClick={handleUpdate}
                >
                </Button>
            </Form>
        </Container>
    )
}