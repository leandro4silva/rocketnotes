import { Container } from './styles.js'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Details() {
  return (
    <Container>
      <Header/>
      <div className='header'>
        <a>Excluir a nota</a>
      </div>
      
      <div className='title-subtitle'>
        <h2>Introdução ao React</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>

      <div className='links'>
        <h2>Links úteis</h2>
        <ul>
          <li>https://www.rocketseat.com.br/</li>
          <li>https://www.rocketseat.com.br/</li>
        </ul>  
      </div>

      <div className='tags'>
        <h2>Marcadores</h2>
        <ul>
          <li>express</li>
          <li>nodejs</li>
        </ul>
      </div>
      <Button title="Voltar" />
    </Container>
  )
}

