import { View, Text, StyleSheet } from "react-native"

function ChooseAccountType() {
    return (
        <View style={styles.container}>
            <Text>ChooseAccountType</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200
    }
})

export default ChooseAccountType