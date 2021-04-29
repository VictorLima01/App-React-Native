import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #E9EAE0;
`;

export const Scroller = styled.ScrollView`
    flex:1;
`;
export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #442357;
    margin-bottom: 20px;
    padding: 0;
`;
export const HeaderTitle = styled.Text`
    width: 100%;
    font-size: 15px;
    color: #FFF;
    padding: 30px;
    font-weight: bold;
`;
export const HeaderTitlePage = styled.Text`
    width: 265px;
    font-size: 22px;
    color: #FFF;
    padding: 30px;
`;
export const HeaderAreaPage = styled.View`
    justify-content: center;
    align-items: center;
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
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
`;
export const InfoArea = styled.View`
    justify-content: space-between;
    padding: 20px;

`;
export const InfoName = styled.Text`

`;