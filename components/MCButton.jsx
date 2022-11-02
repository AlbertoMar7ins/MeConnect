import { Button, Pressable, StyleSheet, Text, TouchableOpacity } from "react-native"
import Pallet from '../pallet'

function MCButton({ paddingX, paddingY, type = 'primary', onClick, children }) {
  const typeFormatted = type.charAt(0).toUpperCase() + type.slice(1)
  return (
    <TouchableOpacity onPress={onClick} style={styles(paddingX, paddingY)[`button${typeFormatted}`]}>
      <Text style={styles()[`text${typeFormatted}`]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = (paddingX = 20, paddingY = 10) => StyleSheet.create({
  buttonPrimary: {
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: paddingX,
    paddingVertical: paddingY,
    elevation: 3,
    borderWidth: 1,
    borderColor: Pallet.seventhColor,
    backgroundColor: Pallet.primaryColor,
    borderRadius: 8
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
    fontSize: 15,
    lineHeight: 15,
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