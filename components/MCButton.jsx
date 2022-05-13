import { Button, Pressable, StyleSheet, Text } from "react-native"
import Pallet from '../pallet'

function MCButton({ paddingX, paddingY, type = 'primary', onClick, children }) {
  const typeFormatted = type.charAt(0).toUpperCase() + type.slice(1)
  return (
    <Pressable onPress={onClick} style={styles(paddingX, paddingY)[`button${typeFormatted}`]}>
      <Text style={styles()[`text${typeFormatted}`]}>{children}</Text>
    </Pressable>
  )
}

const styles = (paddingX = 30, paddingY = 12) => StyleSheet.create({
  buttonPrimary: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: paddingX,
    paddingVertical: paddingY,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: Pallet.primaryColor,
    borderRadius: 10
  },
  buttonSecondary: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: paddingX,
    paddingVertical: paddingY,
    borderRadius: 4,
    elevation: 3,
    borderColor: Pallet.seventhColor,
    borderWidth: 1,
    backgroundColor: '#EEEEEE',
    borderRadius: 10
  },
  textPrimary: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  textSecondary: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: Pallet.fifthColor,
  },
})

export default MCButton