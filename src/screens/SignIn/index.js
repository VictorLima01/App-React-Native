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
import { Image, Text, StyleSheet } from 'react-native';
import SignInput from '../../components/SignInput';
import SignInputPassword from '../../components/SignInputPassword';

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

            <SignMessageButton style={styles.SignMessageButton}>
                <SignMessageButtonText><Text style={styles.SignMessageButtonText}>Todos os direitos reservados Accesstage.</Text></SignMessageButtonText>
                {/* <SignMessageButtonTextBold><Text style={styles.SignMessageButtonTextBold}>Cadastre-se</Text></SignMessageButtonTextBold> */}
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
        marginTop: 50,
        marginBottom: 20,
    },
    SignMessageButtonText: {
        fontSize: 16,
        color: "#C85250",
        fontWeight: "bold",
    },
    SignMessageButtonTextBold: {
        fontSize: 16,
        color: "#C85250",
        fontWeight: "bold",
        marginLeft: 5
    },tinyLogo: {
        width: 95,
        height: 70,
      },

})