import React from "react";
import { useNavigation } from '@react-navigation/native';
import { 
    Container ,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    Area,
    InfoArea,
    InfoName,
    InfoNameAccess,
    SignMessageButtonTextBold,
    ImageLogo
} from './styles';
import { Image, Text, StyleSheet, Linking } from 'react-native';
import SignInput from '../../components/SignInput';
import SignInputPassword from '../../components/SignInputPassword';
import  {Ionicons} from '@expo/vector-icons';

export default () => {
    const navigation = useNavigation();
     const handleSignClick = () =>{

     navigation.navigate('MainTab');
    }
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
            {/* <ImageLogo  source={require('../../assets/access-card-removebg-preview.png')}  /> */}
      
      

            <InputArea>
                <SignInput />
                <SignInputPassword  />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText><Text style={styles.CustomButtonText}>LOGIN</Text></CustomButtonText>
                </CustomButton>
            </InputArea>

            <SignMessageButton style={styles.SignInformationButton}>
               <SignMessageButtonTextBold onPress={()=>{Linking.openURL('tel:119');}} style={styles.funcNavText}>
                   <Text style={styles.SignMessageButtonTextBold}>
                   <Ionicons style={styles.icon} name="help-circle-outline" size={16} color="#442357" />Mais informações clique aqui e ligue para Accesstage.
                   </Text>
                   </SignMessageButtonTextBold>
            </SignMessageButton>

            <SignMessageButton style={styles.SignMessageButton}>
                <SignMessageButtonText><Text style={styles.SignMessageButtonText}>
                     Todos os direitos reservados Accesstage.
                    </Text>
                </SignMessageButtonText>
            </SignMessageButton>

            

        </Container>
    );
}

const styles = StyleSheet.create({
    CustomButtonText: {
        color: "#FFF",
        fontSize: 18,
    },
    SignMessageButton: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 7,
        marginBottom: 20,
    },
    SignInformationButton: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 15,
    },
    SignMessageButtonText: {
        fontSize: 16,
        color: "#868B8E",
        fontWeight: "bold",
    },
    SignMessageButtonTextBold: {
        fontSize: 12,
        color: "#442357",
        marginLeft: 5,
    },tinyLogo: {
        width: 95,
        height: 70,
      },

})