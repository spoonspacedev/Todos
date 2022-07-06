import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";


const Item = ({ title, detail }) => (
    <View
        style={styles.ctnItemCell}
    >
        <View
            style={styles.ctnWrapLeft}
        >
            <Text
                style={styles.txtNormalListItem}
            >
                {title}
            </Text>
        </View>

        <View
            style={styles.ctnWrapRight}
        >
            <Text
                style={styles.txtNormalListItem}
            >
                {detail}
            </Text>
        </View>
    </View>
);

const ListItem = () => {
    return (
        <View
        style={styles.container}
        >
            <Item title={"お名前"} detail={"ひおり　には"} />
            <Item title={"フリガナ"} detail={"1988年11月18日"} />
            <Item title={"生年月日"} detail={"セイ"} />
            <Item title={"性別"} detail={"女性"} />
            <Item title={"自宅電話番号"} detail={"03012345678"} />
            <Item title={"携帯電話番号"} detail={"セ09012345678"} />
            <Item title={"弊社からの連絡先"} detail={"自宅電話番号"} />
            <Item title={"緊急連絡先"} detail={"09012345678"} />
            <Item title={"生年月日"} detail={"セaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com"} />
            <Item title={"性別"} detail={"女性"} />
            <Item title={"自宅電話番号"} detail={"03012345678"} />
            <Item title={"携帯電話番号"} detail={"セ09012345678"} />
        </View>
    )
}

const styles = StyleSheet.create({
    txtHeading1: {
        color: "#1DABAB",
        fontSize: 20,
    },
    container:{
        flex:1
    },
    txtNormal: {
        color: "#515557",
        fontSize: 18,
    },
    txtNormalListItem: {
        color: "#515557",
        fontSize: 18,
        paddingLeft: 8,
        paddingBottom: 12,
        paddingTop: 12,
        paddingRight: 12,
    },
    txtNormalUderline: {
        color: "#515557",
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    ctnWrapLeft: {
        color: "#E5E5E5",
        width: 146,
        borderWidth: 1,
        borderColor: "#E5E5E5",
        backgroundColor: "#F7F7F7",
    },
    ctnWrapRight: {
        color: "#FFFFFF",
        flex: 1,
        borderWidth: 1,
        borderColor: "#E5E5E5",
    },
    ctnItemCell: {
        paddingHorizontal: 17,
        flexDirection: 'row'
    },
})

export default ListItem;