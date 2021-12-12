import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Counter(){
    const styles = StyleSheet.create({
        wrapper: {
            flex: 1,
        },
        numberArea: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        number:{
            fontSize: 72,
            fontWeight: 'bold',
        },
    });

    const [counter, setCounter] = useState(0);

    const onPlusPress = () => {
        setCounter((prev) => prev + 1);
    }

    const onMinusPress = () => {
        setCounter((prev) => prev - 1);
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.numberArea}>
                <Text style={styles.number}>{counter}</Text>
            </View>
            <Button title='+1' onPress={onPlusPress}/>
            <Button title='-1' onPress={onMinusPress}/>
        </View>
    )
}