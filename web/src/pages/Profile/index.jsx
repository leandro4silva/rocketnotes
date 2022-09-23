import { useState, useEffect } from "react";
import { Container, Form, Avatar } from "./styles";
import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'


import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";
import { api } from "../../services/api";

export function Profile(){
    const { user, updateProfile } = useAuth()
    
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarUrl)

    const [avatarFile, setAvatarFile] = useState()

    function handleUpdate(){
        const user = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        updateProfile({user, avatarFile})
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
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto do usuario" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file" onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>

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