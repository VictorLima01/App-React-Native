import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #E9EAE0;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ImageLogo = styled.Image`
    width: 100px;
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