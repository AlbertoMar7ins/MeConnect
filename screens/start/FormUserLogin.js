import { View, Text, StyleSheet } from "react-native"

function FormUserLogin() {
    return (
        <View style={styles.container}>
            <Text>FormUserLogin</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default FormUserLogin