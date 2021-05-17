import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const yourName = 'Nadia';

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.nameSize}>My name is {yourName}</Text>
        </View>
    )   
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    nameSize: {
        fontSize: 20,
    }
});

export default ComponentsScreen;
