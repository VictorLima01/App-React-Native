import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import UserContextProvider from './src/context/UserContext';
import MainStack from './src/stacks/MainStack';

export default () => {
  return(
    <UserContextProvider>
       <NavigationContainer>
        <MainStack />
       </NavigationContainer>
    </UserContextProvider>  
  );
}


