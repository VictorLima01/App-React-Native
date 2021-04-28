import React from 'react';
import styled from 'styled-components/native';
import  {Ionicons} from '@expo/vector-icons';

const InputArea = styled.View `
    width: 100%;
    height: 60px;
    background-color: #FF8A8A;
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
            <Ionicons name="call-outline" size={16} color="rgba(255, 255, 255, 0.8)" />
            <Input value="123456"/>
        </InputArea>
    );
}