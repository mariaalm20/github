import React, {useState} from 'react';
import { View } from 'react-native'

import {useRoute} from '@react-navigation/native'
import api from '../../services/api'
import { 
  Container,
  Avatar,
  Header,
  Name,
  Bio,
  Starred,
  Stars,
  OwnerAvatar,
  Title,
  Info,
  Author
} 
from './styles';

export default function User() {
  const [stars, setStars] = useState([])
  const route = useRoute()
  const user = route.params.user

  async function handleUser(){
    const response = await api.get(`users/${user.login}/starred`)
    setStars(response.data)
    console.log(stars)
  }
  handleUser()
  
  return (
    <Container>
      <Header>
        <Avatar source={{uri: user.avatar}} />
          <Name> {user.name}</Name>
          <Bio>{user.bio}</Bio>
      </Header>

      <Stars
       data = {stars}
       keyExtractor = {star => String(star.id)}
       renderItem = {({item}) => (
        <Starred>
          <OwnerAvatar source = {{uri : item.owner.avatar_url}} />
          <Info>
            <Title>{item.name}</Title>
            <Author>{item.owner.login}</Author>
          </Info>
        </Starred>
       )}
      />
    </Container>
  );
}

