import { View, StyleSheet, Text } from "react-native"

const ConfirmScreen = () => {
    return (
        <View>
            <Text
                style={styles.txtHeading}
            >
                申込内容確認
            </Text>
            <Text
            style = {styles.txtNormal}
            >
            ※必ずお申し込み内容の確認をしてください。
            </Text>
            <Text style= {styles.txtNormal}>
                お客様のお申し込みはま
                <Text style={styles.txtNormalRed}>
                だ完了しておりません。お客様のお申し込みはまだ完了しておりません。
                </Text>
            </Text>
            <Text style= {styles.txtNormal}>
            お申し込み内容、旅行条件をあらためてご確認のうえ、ページ下部にあるボタンを押してください
※お申し込み完了画面の表示をもってお申し込みが完了し
※お申し込み完了後、ご登録のメールアドレスあてにメールをお送りします
※尚、このお申し込みは旅行代金をお支払いいただくまで正式な契約となりません。
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txtHeading: {
        color: "#1DABAB",
        fontSize: 20,
        paddingVertical: 8,
    },
    txtNormal: {
        color: "#515557",
        fontSize: 18,
        paddingVertical: 16,
    },
    txtNormalRed: {
        color: "#FD2021",
        fontSize: 20,
        paddingVertical: 16,
    }
})

export default ConfirmScreen;