import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, Content } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";

import { useForm } from 'react-hook-form'

export function New() {
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    const navigate = useNavigate();

    const {register, handleSubmit, formState:{errors}} = useForm({
        title: "",
        description: "",
        links: links,
        tags: tags
    })

    const [messageErrorLink, setMessageErrorLink] = useState("")
    const [messageErrorTag, setMessageErrorTag] = useState("")


    function handleAddLink(){
        setMessageErrorLink('')
        if(!newLink){
            alert('Preencha o link');
            return;
        }
        setLinks(prevStates => [...prevStates, newLink]);
        setNewLink('');
    }

    function handleBack(){
        navigate(-1)
    }

    function handleAddTag(){
        setMessageErrorTag('')
        setTags(prevState => [...prevState, newTag]);
        setNewTag('');
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter((tag) => {
            if(tag != deleted){
                return tag;
            }
        }))

    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter((link) => {
            if(link != deleted){
                return link;
            }
        }))
    }

    const handleNewNote = async (data) => {

        const {title, description} = data

        if(newLink){
            return setMessageErrorLink('Voce deixou um link no campo para adicionar mas não clicou para adicionar. Clique para adicionar ou deixe o campo vazio')
        }

        if(newTag){
            return setMessageErrorTag('Voce deixou uma tag no campo para adicionar mas não clicou para adicionar. Clique para adicionar ou deixe o campo vazio')
        }

        await api.post('/notes', {
            title,
            description,
            tags,
            links
        })

        alert('Nota criada com sucesso')
        navigate(-1)
    }


    return (
        <Container>
            <Header></Header>
            <Form onSubmit={handleSubmit(handleNewNote)}>
                <Content>
                    <header>
                        <h1>Criar notas</h1>
                        <ButtonText 
                            title="voltar" 
                            onClick={handleBack}
                        ></ButtonText>
                    </header>

                    <Input 
                        placeholder="Titulo"
                        error={errors.title?.message}
                        onChange={e => setTitle(e.target.value)}
                        register={register('title', {required: 'Informe o titulo da nota, por favor!'})}
                    ></Input>

                    <p className="error">{errors.title?.message}</p>

                    <TextArea 
                        placeholder="Observações"
                        error={errors.description?.message}
                        onChange={e => setDescription(e.target.value)} 
                        register={register('description', {required: 'Informe o titulo da nota, por favor!'})}
                    />

                    <p className="error">{errors.description?.message}</p>

                    <Section title="Links Uteis">
                        {
                            links.map((link, index) => {
                                return (<NoteItem
                                    key={String(index)}
                                    value={link} 
                                    onClick={() => handleRemoveLink(link)}
                                />)
                            })
                        }
                        <NoteItem 
                            isNew={true}
                            placeholder="Novo Link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />

                        <p className="error">{messageErrorLink}</p>
                    </Section>


                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => {
                                    return(
                                        <NoteItem 
                                            key={String(index)}
                                            value={tag}
                                            onClick={() => handleRemoveTag(tag)}
                                        ></NoteItem>
                                    )
                                })
                            }
                            <NoteItem 
                                isNew 
                                placeholder="Nova Tag"
                                value={newTag} 
                                onChange={e => setNewTag(e.target.value)} 
                                onClick={handleAddTag} 
                            />

                            <p className="error">{messageErrorTag}</p>
                        </div>
                    </Section>
                    <Button title="Salvar" type="submit"/>
                </Content>
            </Form>
        </Container>
    )
}