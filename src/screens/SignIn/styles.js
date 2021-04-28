import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    background-color: #E9EAE0;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const InputArea = styled.View `
    padding: 40px;
    width: 100%;
`;


export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #C85250;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;
export const CustomButtonText = styled.TouchableOpacity`
    font-size: 18px;
    color: #C85250;
`;

export const ImageLogo = styled.Image`
    width: 250px;
    height: 200px;
`;
export const Area = styled.TouchableOpacity`
    flex-direction: row;
`;
export const InfoArea = styled.View`
    justify-content: space-between;

`;
export const InfoName = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #A30000;
    margin-top: 35px;
    margin-left: -45px;
`;
export const InfoNameAccess = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: grey;
    margin-top: 25px;
    margin-left: 5px;
`;
export const SignMessageButton = styled.TouchableOpacity``;
export const SignMessageButtonText = styled.Text``;
export const SignMessageButtonTextBold = styled.Text``;
