import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function DateHead({date}) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const {top} = useSafeAreaInsets();
    const formattedDate = `${year}년 ${month}월 ${day}일`;

    const styles = StyleSheet.create({
        statusBarPlaceHolder: {
            backgroundColor: '#26a69a',
        },
        block: {
            padding: 16,
            backgroundColor: '#26a69a',
        },
        dateText: {
            fontSize: 24,
            color: 'white',
        },
    });

    return (
        <>
            <View style={[styles.statusBarPlaceHolder, {height: top}]} />
            <StatusBar backgroundColor="#26a69a" barStyle="light-content" />
            <View style={styles.block}>
                <Text style={styles.dateText}>
                    {formattedDate}
                </Text>
            </View>
        </>
    )
}