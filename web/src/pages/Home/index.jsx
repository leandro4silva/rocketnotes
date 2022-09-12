import {FiPlus, FiSearch} from 'react-icons/fi'

import {Container, Brand, Menu, Search, Content, NewNote} from './styles'
import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import { Input } from '../../components/Input'
import {Section} from '../../components/Section'
import { Note } from '../../components/Note'

export function Home(){
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header></Header>

            <Menu>
                <li><ButtonText title="Todos" isActive ></ButtonText></li>
                <li><ButtonText title="Frontend"></ButtonText></li>
                <li><ButtonText title="Nodejs"></ButtonText></li>
                <li><ButtonText title="React"></ButtonText></li>
            </Menu>

            <Search>
                <Input placeholder = "Pesquisar pelo título" icon={FiSearch} />   
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data ={ 
                        {
                            title: 'React', 
                            tags: [
                                {id: '1', name: 'React'},
                                {id: '2', name: 'DOM'}
                            ] 
                        } 
                    }></Note>                  
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus/> Criar Nota
            </NewNote>
        </Container>
    )
}