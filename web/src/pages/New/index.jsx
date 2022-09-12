import { Container, Form, Content } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";

import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";

import {Button} from "../../components/Button"
import { Link } from "react-router-dom";

export function New() {
    return (
        <Container>
            <Header></Header>
            <Form>
                <Content>
                    <header>
                        <h1>Criar notas</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Titulo"></Input>
                    <TextArea placeholder="Observações" />

                    <Section title="Links Uteis">
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem isNew placeholder="Novo Link" />
                    </Section>


                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React" />
                            <NoteItem value="React" />
                            <NoteItem value="React" />
                            <NoteItem value="React" />
                            <NoteItem value="React" />
                            <NoteItem value="React" />
                            <NoteItem value="React" />
                            <NoteItem value="React" />
                            <NoteItem isNew placeholder="Nova Tag" />
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Content>
            </Form>


        </Container>
    )
}