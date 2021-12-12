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
    rounded: {
        borderRadius: 16,
    },
    small:{
        width:32,
        height:32,
    },
    medium:{
        width:64,
        height:64,
    },
    large:{
        width:128,
        height:128,
    },
});

const sizes ={
    small: classes.small,
    medium: classes.medium,
    large: classes.large,
};

Box.defaultProps = {
    size: 'medium',
    color: 'black',
}

export default function Box({rounded, size, color}) {
    return (
        <View style={[classes.box,
            rounded && classes.rounded,
            sizes[size],
            {
                backgroundColor: color,
            }
        ]} />
    );
}