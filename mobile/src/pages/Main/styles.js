import styled from 'styled-components/native'
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #bbb;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#848484'
})`
  flex:1;
  height: 40px;
  background: #dcdcdc;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
` 

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`
export const User = styled.View`
 align-items: center;
 margin: 0 20px 30px;
`

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: #eeee;
`
export const Name = styled.Text`
  font-size: 15px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  line-height: 19px;
  color: #848484;
  margin-top: 5px;
  text-align: center;
`
export const PorfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background-color: #7159c1;
  justify-content: center;
  align-items: center;
  height: 36px;
`
export const PorfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase
`