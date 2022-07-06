import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";
import BodyScreen from './BodyScreen';
import HeaderScreen from './HeaderScreen';

const MainScreen = () => {
    return(
        <View style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1,
            }}>
                <HeaderScreen></HeaderScreen>
            </View>
            <View style={{
                flex: 9,
            }}>
                <BodyScreen></BodyScreen>
            </View>
        </View>
    )
}
export default MainScreen;