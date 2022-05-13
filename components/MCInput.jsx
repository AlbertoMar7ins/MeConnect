import React from "react";
import { StyleSheet, Text, TextInput } from "react-native"


function MCInput({ type = 'text', placeholder }) {
    const [text, onChangeText] = React.useState('');
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder={placeholder}
            keyboardType={type}
            selectionColor='#FFCCA0'
        />
    )
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#F9F9F9',
        borderColor: '#EEEEEE',
        borderWidth: 2,
        borderRadius: 12,
        width: 320,
        elevation: 3,
    }
})

export default MCInput