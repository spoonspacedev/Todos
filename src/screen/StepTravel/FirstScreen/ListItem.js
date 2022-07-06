import React, { Component } from 'react';
import { StyleSheet, Text, View } from "react-native";

const ListItem = () => {
    return (
        <View>
            <View
                style={styles.ctnItemCell}
            >
                <View
                    style={styles.ctnWrapLeft}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        お名前
                    </Text>
                </View>

                <View
                    style={styles.ctnWrapRight}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        ひおり　には
                    </Text>
                </View>
            </View>
            <View
                style={styles.ctnItemCell}
            >
                <View
                    style={styles.ctnWrapLeft}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        フリガナ
                    </Text>
                </View>

                <View
                    style={styles.ctnWrapRight}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        セイ
                    </Text>
                </View>
            </View>
            <View
                style={styles.ctnItemCell}
            >
                <View
                    style={styles.ctnWrapLeft}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        性別
                    </Text>
                </View>

                <View
                    style={styles.ctnWrapRight}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        女性
                    </Text>
                </View>
            </View>
            <View
                style={styles.ctnItemCell}
            >
                <View
                    style={styles.ctnWrapLeft}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        生年月日
                    </Text>
                </View>

                <View
                    style={styles.ctnWrapRight}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        1988年11月18日
                    </Text>
                </View>
            </View>

            <View
                style={styles.ctnItemCell}
            >
                <View
                    style={styles.ctnWrapLeft}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        生年月日
                    </Text>
                </View>

                <View
                    style={styles.ctnWrapRight}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        03012345678
                    </Text>
                </View>
            </View>

            <View
                style={styles.ctnItemCell}
            >
                <View
                    style={styles.ctnWrapLeft}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        携帯電話番号
                    </Text>
                </View>

                <View
                    style={styles.ctnWrapRight}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        09012345678
                    </Text>
                </View>
            </View>

            <View
                style={styles.ctnItemCell}
            >
                <View
                    style={styles.ctnWrapLeft}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        弊社からの連絡先
                    </Text>
                </View>

                <View
                    style={styles.ctnWrapRight}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        自宅電話番号
                    </Text>
                </View>
            </View>

            <View
                style={styles.ctnItemCell}
            >
                <View
                    style={styles.ctnWrapLeft}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        ご自宅以外のご住所
                    </Text>
                </View>

                <View
                    style={styles.ctnWrapRight}
                >
                    <Text
                        style={styles.txtNormalListItem}
                    >
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com
                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    txtHeading1: {
        color: "#1DABAB",
        fontSize: 20,
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