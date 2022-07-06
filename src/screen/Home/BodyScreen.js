import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const FloatingActionButton = () => {
    return (
        <TouchableOpacity
            onPress={() => alert('Floating Action button clicked')}
            style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.2)',
                alignItems: 'center',
                justifyContent: 'center',
                width: 70,
                position: 'absolute',
                bottom: 50,
                right: 40,
                height: 70,
                backgroundColor: '#00B2FF',
                borderRadius: 100,
            }}
        >
            <Image
                style={styles.floating_button_image}
                source={require('../../assets/add.png')}
            />
        </TouchableOpacity>
    )
}

const BodyScreen = () => {
    return (
        <View
            style={styles.container}>
            <Image
                style={styles.box_image}
                source={require('../../assets/box.png')}
            />
            <Text style={{
                fontSize: 16,
                padding: 20
            }}>
                You have nothing to do
            </Text>
            <FloatingActionButton></FloatingActionButton>
        </View>
    )
}

const styles = StyleSheet.create({
    box_image: {
        height: 100,
        width: 100,
    },
    floating_button_image: {
        height: 16,
        width: 16,
        color: "#FFFFFF",
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
    }
})

export default BodyScreen;