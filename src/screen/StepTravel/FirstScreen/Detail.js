import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";
const DetailScreen = () => {
    return (
        <View>
            <View
                style= {styles.container}
            >
                <Text
                    style={styles.txtDetail}
                >
                    問合わせコード:
                </Text>
                <Text
                    style={styles.txtNormal}
                >
                    A2422
                </Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <Text
                    style={styles.txtDetail}
                >
                    問合わせコード:
                </Text>
                <Text
                    style={styles.txtNormal}
                >
                    A2422
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 12,
    },
    txtNormal: {
        color: "#515557",
        fontSize: 18,
        paddingVertical: 8,
    },
    txtDetail: {
        color: "#949393",
        fontSize: 18,
        padding: 8,
    },
})
export default DetailScreen;