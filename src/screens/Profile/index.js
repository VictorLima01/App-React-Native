import React from 'react';
import { 
    Container ,
    InputArea,
    CustomButton,
    CustomButtonText,
    CustomButtonExit, 
    SignMessageButton,
    SignMessageButtonText,
    ImageUserArea,
    SignMessageButtonTextBold,
    ImageLogo
} from './style';
import { Image, Text, StyleSheet } from 'react-native';
import InputProfileEmail from '../../components/profile/InputProfileEmail';
import InputProfilePassword from '../../components/profile/InputProfilePassword';
import InputProfileCnpj from '../../components/profile/InputProfileCnpj';
import InputProfilePhone from '../../components/profile/InputProfilePhone';
import  {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();
     const handleSignClick = () =>{

     navigation.navigate('SignIn');
    }
    return(
        <Container>
            <ImageUserArea>
              <Ionicons name="person-circle" size={200} color="#C85250" />
            </ImageUserArea>
            <InputArea>
                <InputProfileEmail />
                <InputProfilePassword />
                <InputProfileCnpj />
                <InputProfilePhone />
                <CustomButton>
                    <CustomButtonText><Text style={styles.CustomButtonText}>
                    <Ionicons name="person-circle" size={30} color="rgba(255, 255, 255, 0.8)" />
                    Salvar perfil</Text></CustomButtonText>
                </CustomButton>
                <CustomButtonExit onPress={handleSignClick}>
                    <CustomButtonText><Text style={styles.CustomButtonText}>
                    <Ionicons name="exit" size={30} color="rgba(255, 255, 255, 0.8)" />
                    LogOut</Text></CustomButtonText>
                </CustomButtonExit>
            </InputArea>
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
    }

})