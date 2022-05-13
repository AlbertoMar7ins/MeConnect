import React from "react";
import { StyleSheet, Text } from "react-native"


function MCTitle({ children, size = 18 }) {
    return (
      <Text style={{fontWeight: 'bold', fontSize: size}}>{children}</Text>
    )
}

export default MCTitle