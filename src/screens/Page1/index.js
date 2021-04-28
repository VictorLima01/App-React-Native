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
    const navigation = useNavigation();
     const handleSignClick = () =>{

     navigation.navigate('Gestao');
    }
    const clickFluxo = () =>{

      navigation.navigate('FluxoCaixa');
     }
    return (
        <Container>
            <Scroller>
            <HeaderArea>
                    <HeaderTitlePage style={{marginTop: 35}}  numberOfLines={2}>
                    Serviços</HeaderTitlePage >    
           </HeaderArea>
           <HeaderArea style={{marginTop: -55}}>
                    <HeaderTitle numberOfLines={2}>
                    <Ionicons style={{marginRight: 10}} name="analytics" size={20} color="#FFF" />
                      Serviços</HeaderTitle>    
           </HeaderArea>
             <Area>
                 <InfoArea>
                   <InfoName style={styles.titulo}>
                   Taxas Administrativas</InfoName>
                   </InfoArea>
                   <Ionicons style={styles.icon} name="chevron-forward-outline" size={35} color="#442357" /> 
             </Area>
             <Area onPress={clickFluxo}>
                 <InfoArea>
                   <InfoName style={styles.titulo}>
                   Fluxo de gestão</InfoName>
                   </InfoArea>
                   <Ionicons style={styles.icon} name="chevron-forward-outline" size={35} color="#442357" /> 
             </Area>
             <Area  onPress={handleSignClick}>
                 <InfoArea>
                   <InfoName style={styles.titulo}>
                   Gestão</InfoName>
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