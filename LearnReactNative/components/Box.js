import React from 'react';
import {View, StyleSheet} from 'react-native';

const classes = StyleSheet.create({
    container: {
        left: 10,
        top: 10,
    },
    box: {
        width: 64,
        height: 64,
        backgroundColor: 'black',
    },
});

export default function Box() {
    return (
    <div style={classes.container}>
        <View style={classes.box} />
    </div>
    );
}