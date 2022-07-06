import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { btn_accept, icn_right_arrow } from '../../../assets/ImageValue';
import ConfirmScreen from './Confirm';
import DetailScreen from './Detail';
import ListItem from './ListItem';
import SelectPaymentScreen from './SelectPayment';

const FirstScreen = () => {
    return (
        <ScrollView>
            <View
                style={styles.container}
            >
                <SelectPaymentScreen></SelectPaymentScreen>
                <Text
                    style={styles.txtNormal}
                >
                    初夏の伊豆旅★大感謝セール！伊豆産マスクメロン狩りと1/8カットデザート付！涼やかな風を感じる「駿河湾クルーズ」＆御殿場プレミアム・アウトレット
                </Text>
                <DetailScreen></DetailScreen>
                <ConfirmScreen></ConfirmScreen>
                <Text
                    style={styles.txtHeading}
                >
                    ご旅行参加者
                </Text>
                <Text
                    style={styles.txtNormal}
                >
                    お名前（漢字フリガナ）、性別、生年月日に誤りがないかご確認ください。登録内容に誤りがありますと、ご旅行の手配が正しくされず、ご出発できない場合、追加費用が発生する場合があります。
                </Text>
                <Text
                    style={styles.txtHeading}
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
                    style={styles.txtHeading}
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
    txtHeading: {
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
        color: "#949393",
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    txtDetail:{
        color: "#949393",
        fontSize: 20,
        padding: 16,
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