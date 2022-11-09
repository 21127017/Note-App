import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Note = (props) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.editText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#99CCFF',
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
    },
    editText: {
        fontSize: 15,
        fontWeight: '500',
    },
})

export default Note;