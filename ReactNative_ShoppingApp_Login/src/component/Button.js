import React from 'react';
import {TouchableOpacity, View,Text,StyleSheet, Dimensions } from 'react-native';


const Button =()=> {
    return(
        <TouchableOpacity style={styles.join}>
            <Text style={styles.text}>Join Us</Text>
        </TouchableOpacity>
    )
}

export {Button}

const styles = StyleSheet.create({
    join:{
        backgroundColor:'#607d8b',
        alignItems:'center',
        padding:10,
        width :Dimensions.get('window').width * 0.6,
        alignSelf:'center',
        borderRadius:10,
        marginVertical:25,
    },
    text:{
        color:'azure'
    }
})
