import React, {useState, useEffect} from 'react';

import {Keyboard, ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api'
import AsyncStorage from '@react-native-community/async-storage'

import {useNavigation} from '@react-navigation/native'

import { 
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  PorfileButton,
  PorfileButtonText
  } from './styles';

export default function Main() {
  const [newUser, setNewUser] = useState('')
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const navigation = useNavigation()
   
  async function saveUser(){
    const users =  await AsyncStorage.getItem('users')
    
    AsyncStorage.setItem('users', JSON.stringify(users))
  }

  useEffect(() => {
   saveUser()
  }, [users])
  
  async function handleAddUser(){
   setLoading(true)

    const response = await api.get(`/users/${newUser}`)
    const data = {
      name : response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url
  }

  setUsers([...users, data])
  setNewUser('')
  setLoading(false)

  Keyboard.dismiss()

}

 function handleNavigate(user){
   navigation.navigate('User', {user})
}

  return (
    <Container>
      <Form>
        <Input
         autoCorrect = {false}
         autoCapitalize = 'none'
         placeholder = "Adicionar usuário"
         value = {newUser}
         onChangeText = {text => setNewUser(text)}
         returnKeyType = 'send'
         onSubmitEditing = {handleAddUser}
         /> 
         <SubmitButton loading = {loading} onPress = {handleAddUser}>
           {loading ? ( 
           <ActivityIndicator color = "#ffff" /> ) : 
           <Icon name = "add" size = {20} color = "#FFF"/>
           }
         </SubmitButton>
      </Form>

      <List 
      data = {users}
      keyExtractor = {user => String(user.login)}
      renderItem = {({item}) => (
        <User>
          <Avatar source={{uri: item.avatar}} />
          <Name> {item.name}</Name>
          <Bio>{item.bio}</Bio>
          <PorfileButton onPress = {() => handleNavigate(item)}>
            <PorfileButtonText> Ver Perfil </PorfileButtonText>
          </PorfileButton>
        </User>
      )}
      />
    </Container>
  );
}

Main.navigationOption = {
  title : "Usuários"
}