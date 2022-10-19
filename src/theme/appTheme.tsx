import { StyleSheet } from "react-native"



export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        marginBottom:10,
    },

    boton:{
        width: 100,
        height: 100,
        backgroundColor:'green',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginTop:80,

    },

    botonTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    avatarContainer:{
        alignItems:'center',
        marginTop: 20,
    },

    avatar:{
        width: 150,
        height: 150,
        borderRadius: 100,
    },

    menuContainer:{
        marginVertical: 30,
        marginHorizontal: 20,
        alignItems: 'center',
    },

    menuBoton:{
        marginVertical: 10,
        
    },

    menuText:{
        fontSize: 20,
    }
    

})