import React from 'react';
import styled from 'styled-components/native';
import  {Ionicons} from '@expo/vector-icons';

const TabArea = styled.View`
    height: 60px;
    background-color: #442357;
    flex-direction: row;
`
const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #442357;
    border-radius: 35px;
    border: 3px solid #FFF;
    margin-top: -20px;
`
const TabItemTitle = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #FFF;
`;
const TextTabItemTitle = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: #FFF;
`;
export default ({ state, navigation}) => {

    const goTo = (screenName) =>{
        navigation.navigate(screenName)
    }

    return (
        <TabArea>
            <TabItem onPress={()=> goTo('Page1')}>
                <Ionicons style={{opacity: state.index===1? 1: 0.5}} name="bar-chart" size={23} color="#FFF" />
                <TextTabItemTitle style={{opacity: state.index===1? 1: 0.5}}>Serviços</TextTabItemTitle>
            </TabItem>
            <TabItem onPress={()=> goTo('Gestao')}>
                <Ionicons style={{opacity: state.index===2? 1: 0.5}} name="bar-chart" size={23} color="#FFF" />
                <TextTabItemTitle style={{opacity: state.index===2? 1: 0.5}}>Gestão</TextTabItemTitle>
            </TabItem> 
            <TabItemCenter onPress={()=> goTo('Home')}>
                <Ionicons style={{opacity: state.index===0? 1: 0.5}} name="home" size={25} color="#FFF" />
            </TabItemCenter>
             <TabItem onPress={()=> goTo('Page3')}>
                <Ionicons style={{opacity: state.index===3? 1: 0.5}} name="help-outline" size={23} color="#FFF" />
                <TextTabItemTitle style={{opacity: state.index===3? 1: 0.5}}>Perguntas Frequentes</TextTabItemTitle>
            </TabItem> 
            <TabItem onPress={()=> goTo('Profile')}>
                <Ionicons style={{opacity: state.index===4? 1: 0.5}} name="person-circle" size={23} color="#FFF" />
                <TextTabItemTitle style={{opacity: state.index===4? 1: 0.5}}>Perfil</TextTabItemTitle>
            </TabItem>
        </TabArea>
    )
}