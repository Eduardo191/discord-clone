import React, { useRef, useEffect} from 'react'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, { Mention } from '../ChannelMessage'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>
  
  useEffect(() => {
    const div = messagesRef.current

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>

        <ChannelMessage
          author="Eduardo Ferreira"
          date="20/06/2020"
          content="Clonando o Discord"
        />

        <ChannelMessage
          author="João da Silva"
          date="20/06/2020"
          content={
            <>
              <Mention>Eduardo Ferreira</Mention>, muito legal seu projeto.
            </>
          }
          hasMention
          isBot
        />

        <ChannelMessage
          author="Fulano"
          date="20/06/2020"
          content="Mensagem do Fulano"
        />

        <ChannelMessage
          author="Fulano"
          date="20/06/2020"
          content="Mensagem do Fulano"
        />

        <ChannelMessage
          author="Fulano"
          date="20/06/2020"
          content="Mensagem do Fulano"
        />

        <ChannelMessage
          author="Fulano"
          date="20/06/2020"
          content="Mensagem do Fulano"
        />

        <ChannelMessage
          author="Fulano"
          date="20/06/2020"
          content="Mensagem do Fulano"
        />

        <ChannelMessage
          author="Fulano"
          date="20/06/2020"
          content="Mensagem do Fulano"
        />

        <ChannelMessage
          author="Fulano"
          date="20/06/2020"
          content="Mensagem do Fulano"
        />

        <ChannelMessage
          author="Fulano"
          date="20/06/2020"
          content="Mensagem do Fulano"
        />

        <ChannelMessage
          author="Fulano"
          date="20/06/2020"
          content="Mensagem do Fulano"
        />

        <ChannelMessage
          author="Fulano"
          date="20/06/2020"
          content="Mensagem do Fulano"
        />

        <ChannelMessage
          author="Fulano"
          date="20/06/2020"
          content="Mensagem do Fulano"
        />

        <ChannelMessage
          author="Fulano"
          date="20/06/2020"
          content="Mensagem do Fulano"
        />

      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData