import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import { icn_checked, icn_unchecked } from "../../../assets/ImageValue";
import { useState } from "react";

const SelectPaymentScreen = () => {
    const [banking, setBanking] = useState(icn_unchecked);
    const [transfer, setTransfer] = useState(icn_checked);
    return (
        <View>
            <Text
            style={styles.txtHeading}
            >
                お支払い方法の選択
            </Text>
            <TouchableOpacity
                style={styles.btnPayment}
                onPress={() => {
                    setTransfer(icn_unchecked);
                    setBanking(icn_checked)
                }}
            >
                <Image
                    style={styles.icnCheckButton}
                    source={banking}
                />
                <Text
                    style={styles.txtPaymet}
                >
                    Banking
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnPayment}
                onPress={() => {
                    setTransfer(icn_checked);
                    setBanking(icn_unchecked)
                }}
            >
                <Image
                    style={styles.icnCheckButton}
                    source={transfer}
                />
                <Text
                    style={styles.txtPaymet}
                >
                    Transfer
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    txtHeading: {
        color: "#1DABAB",
        fontSize: 20,
        paddingBottom: 8,
    },
    txtNormal: {
        color: "#515557",
        fontSize: 18,
        paddingBottom: 16,
    },
    txtPaymet: {
        color: "#515557",
        fontSize: 18,
        paddingHorizontal: 16,
    },
    icnCheckButton: {
        width: 28,
        padding: 8,
        aspectRatio: 1,
    },
    btnPayment: {
        flexDirection: "row",
        paddingBottom: 12,
    }
})

export default SelectPaymentScreen;