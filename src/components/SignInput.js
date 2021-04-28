import React from 'react';
import styled from 'styled-components/native';
import  {Ionicons} from '@expo/vector-icons';

const InputArea = styled.View `
    width: 100%;
    height: 60px;
    background-color: #B9B7BD;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`;
const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    margin-left: 10px;
`;
export default (placeholder) => {
    return (
        <InputArea>
            <Ionicons name="mail-outline" size={22} color="rgba(255, 255, 255, 0.8)" />
            <Input placeholder="Digite seu email" placeholderTextColor="rgba(255, 255, 255, 0.8)"/>
        </InputArea>
    );
}