import { View, Text, StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import React from 'react';

const FocusedStatusBar = (props) => {

    const isFocused = useIsFocused();

    return isFocused ? <StatusBar animated={true} {...props} /> : null; // props contain background color for statusBar or hide
}

export default FocusedStatusBar