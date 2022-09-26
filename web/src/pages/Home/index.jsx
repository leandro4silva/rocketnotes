import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

import { api } from '../../services/api'

export function Home() {
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [search, setSearch] = useState('')
    const [notes, setNotes] = useState([])

    const navigate = useNavigate()

    function handleTagSelected(tagName) {
        if(tagName == 'all'){
            setTagsSelected([])
            return
        }

        const alreadySelected = tagsSelected.includes(tagName);

        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag != tagName)
            setTagsSelected(filteredTags)

        } else {
            setTagsSelected(prevStat => [...prevStat, tagName]);
        }

        console.log(tagsSelected);
    }

    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags');
            setTags(response.data);
        }

        fetchTags();
    }, [])

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }

        fetchNotes();

    }, [tagsSelected, search])

    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header></Header>

            <Menu>
                <li>
                    <ButtonText
                        title="Todos"
                        isActive={tagsSelected.length === 0}
                        onClick={() => handleTagSelected('all')}
                    >
                    </ButtonText>
                </li>

                {
                    tags.map(tag => {
                        return (
                            <li key={tag.id}>
                                <ButtonText
                                    title={tag.name}
                                    onClick={() => handleTagSelected(tag.name)}
                                    isActive={tagsSelected.includes(tag.name)}
                                >
                                </ButtonText>
                            </li>
                        )
                    })
                }
            </Menu>

            <Search>
                <Input
                    placeholder="Pesquisar pelo título"
                    icon={FiSearch}
                    onChange={e => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    {
                        notes.map(note => (
                            <Note
                                key={String(note.id)} 
                                data={note}
                                onClick={() => handleDetails(note.id)}
                            ></Note>
                        ))

                    }
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus /> Criar Nota
            </NewNote>
        </Container>
    )
}