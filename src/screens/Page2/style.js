import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #E9EAE0;
`;

export const Scroller = styled.ScrollView`
    flex:1;
    padding: 30px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
    margin-bottom: 20px
`;
export const HeaderAreaPage = styled.View`
    justify-content: center;
    align-items: center;
`;
export const HeaderTitlePage = styled.Text`
    width: 100%;
    font-size: 15px;
    color: #FFF;
    margin-bottom: 20px
`;
export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;
export const Area = styled.TouchableOpacity`
    background-color: #FFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;
export const InfoArea = styled.View`
    justify-content: space-between;

`;
export const InfoName = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;