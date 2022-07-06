import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const HeaderScreen = () => {
    return (
        <View
            style={styles.container}>
            <View style={styles.heading_container}>
                <Text style={styles.heading}>
                    To-dos
                </Text>
            </View>
            <View style={styles.right_container}>


                <TouchableOpacity
                    onPress={() => alert('Search button clicked')}
                >
                    <Image
                        style={styles.image_button}
                        source={require('../../assets/search.png')}
                    />
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => alert('Three dot clicked')}
                >
                    <Image
                        style={styles.image_button}
                        source={require('../../assets/three_dot.png')}
                    />
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        color: "#000000",
        fontStyle: 'bold'
    },
    txtHeadingContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    image_button: {
        padding: 24,
        resizeMode: 'center',
        height: 16,
        width: 16,
    },
    right_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})

export default HeaderScreen;
