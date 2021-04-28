import React, { useEffect} from "react";
import { ImageBackground, Image, StyleSheet } from 'react-native';
import { Container, LoadingIcon, ImageLogo, Area,
    InfoArea,
    InfoName,
    InfoNameAccess, } from './styles';
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from '@react-navigation/native';


export default () => {

    const navigation = useNavigation();
    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token){
                //validar token
            }else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);

    return(
        <Container>
            <Area>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/access-card-removebg-preview.png')}
            />
            <InfoNameAccess>
             Access</InfoNameAccess>
             <InfoName>
             CARD</InfoName>
            </Area>
        
           <LoadingIcon size="large" color="#FFFFFF"/>
        </Container>
    );
}
const styles = StyleSheet.create({
    tinyLogo: {
        width: 95,
        height: 70,
      },

})