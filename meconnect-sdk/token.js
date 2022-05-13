import AsyncStorage from '@react-native-async-storage/async-storage'

export default {
    async set(token) {
        try {
            AsyncStorage.setItem('@MCON_API_TOKEN', token)
        } catch (error) {
            alert(error)
        }
    },

    get() {
        try {
            return AsyncStorage.getItem('@MCON_API_TOKEN')
        } catch (error) {
            alert(error)
        }
    }
}