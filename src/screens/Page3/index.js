import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
   SafeAreaView,
   Text,
   View,
   StyleSheet,
   Dimensions,
   ScrollView, 
} from 'react-native';
import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    ListArea,
    Area,
    InfoArea,
    InfoName,
    HeaderTitlePage,
    HeaderAreaPage
} from './style';
import  {Ionicons} from '@expo/vector-icons';

export default () => {
    return (
        <Container>
            <Scroller>
            <HeaderArea>
                    <HeaderTitlePage style={{marginTop: 35}}  numberOfLines={2}>
                    Perguntas</HeaderTitlePage >    
           </HeaderArea>
           <HeaderArea style={{marginTop: -45}}>
                    <HeaderTitle numberOfLines={2}>
                    <Ionicons style={{marginRight: 10}} name="help-circle-outline" size={20} color="#FFF" />
                      Perguntas frequentes</HeaderTitle>    
           </HeaderArea>
             <Area>
                 <InfoArea>
                   <InfoName style={styles.titulo}>
                   Controle de Taxas</InfoName>
                   </InfoArea>
                   <Ionicons style={styles.icon} name="chevron-forward-outline" size={35} color="#442357" /> 
             </Area>
             <Area>
                 <InfoArea>
                   <InfoName style={styles.titulo}>
                   Fluxo de caixa</InfoName>
                   </InfoArea>
                   <Ionicons style={styles.icon} name="chevron-forward-outline" size={35} color="#442357" /> 
             </Area>
            </Scroller>
        </Container>
    )
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: 'white',
     justifyContent: 'center',
     alignItems: 'center',
     textAlign: 'center',
     padding: 10,
   },
   header: {
     textAlign: 'center',
     fontSize: 18,
     padding: 16,
     marginTop: 16,
   },
   lineStyle:{
       borderWidth: 0.2,
       borderColor:'grey',
       justifyContent: 'center',
       marginTop: 15
  }, 
  icon:{
   marginTop: 15,
   justifyContent: 'space-between',
   position: 'absolute', 
   marginRight: 20,
   right: 0,
   padding: 20,
 }, titulo:{
   color: "#442357",
   fontSize: 20,
 }
 , descricao:{
   color: "grey",
   fontSize: 15,
   marginTop: 15
 }
 });