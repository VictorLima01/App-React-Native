import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Page1 from '../screens/Page1';
import Page2 from '../screens/Page2';
import Page3 from '../screens/Page3';
import Profile from '../screens/Profile';
import Gestao from '../screens/Gestao';
import FluxoCaixa from '../screens/FluxoCaixa';
const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Page1" component={Page1} />
        <Tab.Screen name="Page2" component={Page2} />
        <Tab.Screen name="Page3" component={Page3} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Gestao" component={Gestao} />
        <Tab.Screen name="FluxoCaixa" component={FluxoCaixa} />
    </Tab.Navigator>
);