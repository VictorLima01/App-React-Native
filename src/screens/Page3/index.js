import React from 'react';
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
import { useNavigation } from '@react-navigation/native';

export default () => {
    return (
        <Container>
            <Scroller>
                <HeaderAreaPage>
                    <HeaderTitlePage numberOfLines={2}>
                    Home/ Conciliação Pagamento</HeaderTitlePage>    
                </HeaderAreaPage> 
                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>
                    <Ionicons name="analytics" size={25} color="#FFF" />
                    Conciliação Pagamento</HeaderTitle>    
                </HeaderArea>
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
    arrow:{
        marginTop: 15,
        justifyContent: 'space-between',
        position: 'absolute', 
        marginRight: 20,
        right: 0
    },
  });