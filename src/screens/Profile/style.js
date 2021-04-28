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
export const ImageUserArea = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 50px
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
export const CustomButtonExit = styled.TouchableOpacity`
    height: 60px;
    background-color: #C85250;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;
export const ImageLogo = styled.Image`
    width: 100px;
`;

export const SignMessageButton = styled.TouchableOpacity``;
export const SignMessageButtonText = styled.Text``;
export const SignMessageButtonTextBold = styled.Text``;
