import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const App = () => {
    const styles = StyleSheet.create({
        full: {
            flex: 1,
        },
    });
    
    return (
       <SafeAreaView style={styles.full}>
           <Counter />
       </SafeAreaView> 
    )
}

export default App;