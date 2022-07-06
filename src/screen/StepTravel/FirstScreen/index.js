import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { btn_accept, icn_right_arrow } from '../../../assets/ImageValue';
import ListItem from './ListItem';

const FirstScreen = () => {
    return (
        <ScrollView>
            <View
                style={styles.container}
            >
                <Text
                    style={styles.txtHeading1}
                >
                    ご旅行参加者
                </Text>
                <Text>
                    お名前（漢字フリガナ）、性別、生年月日に誤りがないかご確認ください。登録内容に誤りがありますと、ご旅行の手配が正しくされず、ご出発できない場合、追加費用が発生する場合があります。
                </Text>
                <Text
                    style={styles.txtHeading1}
                >
                    代表者（申込者）
                </Text>
                <View
                    style={styles.ctnNextButton}
                >
                    <Text
                        style={styles.txtNormalUderline}
                    >
                        代表者の情報を変更する
                    </Text>
                    <Image
                        style={styles.icnNextIcon}
                        source={icn_right_arrow}
                    />
                </View>
                <ListItem></ListItem>
                <Text
                    style={styles.txtHeading1}
                >
                    同行者1
                </Text>
                <View
                    style={styles.ctnNextButton}
                >
                    <Text
                        style={styles.txtNormalUderline}
                    >
                        代表者の情報を変更する
                    </Text>
                    <Image
                        style={styles.icnNextIcon}
                        source={icn_right_arrow}
                    />
                </View>
                <ListItem></ListItem>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    txtHeading1: {
        color: "#1DABAB",
        fontSize: 20,
        paddingVertical: 8,
        fontFamily: "NotoSansJP-Bold",
    },
    txtNormal: {
        color: "#515557",
        fontSize: 18,
        paddingVertical: 16,
    },
    txtNormalUderline: {
        color: "#515557",
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    container: {
        padding: 17,
        backgroundColor: "#FFFFFF",
        flex: 1,
    },
    icnNextIcon: {
        aspectRatio: 1,
        height: 24,
        resizeMode: 'center',
    },
    ctnNextButton: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 18,
        alignContent: 'stretch',
    },
})

export default FirstScreen;