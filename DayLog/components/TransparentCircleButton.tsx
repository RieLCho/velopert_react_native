import React from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  View,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  rightMargin: {
    marginRight: 8,
  },
});

interface IProps {
  name: string;
  color: string;
  hasMarginRight?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}

function TransparentCircleButton({
  name,
  color,
  hasMarginRight,
  onPress,
}: IProps) {
  return (
    <View
      style={[styles.iconButtonWrapper, hasMarginRight && styles.rightMargin]}>
      <Pressable
        style={({ pressed }) => [
          styles.iconButton,
          Platform.OS === 'ios' && pressed && { backgroundColor: '#efefef' },
        ]}
        onPress={onPress}
        android_ripple={{ color: '#ededed' }}>
        <Icon name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
}

export default TransparentCircleButton;
