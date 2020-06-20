import React from 'react'
import { Container, Role, User, Avatar } from './styles'

export interface Props {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<Props> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Eduardo Ferreira" />

      <Role>Offline - 18</Role>
      <UserRow nickname="João da Silva" isBot />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />
      <UserRow nickname="Fulano"  />      
    </Container>
  )
}

export default UserList