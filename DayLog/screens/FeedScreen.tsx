import React from 'react';
import { StyleSheet, View } from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

function FeedScreen() {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
}

export default FeedScreen;
