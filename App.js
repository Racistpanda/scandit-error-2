import React, { Component } from 'react';

import {
    TabNavigator
} from 'react-navigation';

import {
    ScanditModule
} from 'scandit-react-native';

import ScanTab from './app/tabs/ScanTab';
import SettingsTab from './app/tabs/SettingsTab';
import PickersTab from './app/tabs/PickersTab';

ScanditModule.setAppKey('Scandit key here');

export const App = TabNavigator({
        Scan: {
            screen: ScanTab
        },
        Settings: {
            screen: SettingsTab
        },
        Pickers: {
            screen: PickersTab
        }},
    {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        backBehavior: 'none',
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'black',
            style: {
                backgroundColor: 'white'
            },
            indicatorStyle: {
                backgroundColor: 'white'
            }
        },
    }
);
