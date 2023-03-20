import { StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        maxWidth: 320,
    },
    name: {
        flexGrow: 9,
        fontSize: 16,
        color: 'white',
        // backgroundColor: '#fff',
        marginLeft: 12,
        maxWidth: 230,
        //    width: '75%'

    },
    buttonText: {
        color: '#fff',

    },
    div: {
        flexGrow: 1,
        alignItems: 'flex-end',
        // backgroundColor: 'white',
        // width: '20%'
    },
    check: {
        backgroundColor: 'red',
    },
    button: {

        width: 50,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center'
    },

})