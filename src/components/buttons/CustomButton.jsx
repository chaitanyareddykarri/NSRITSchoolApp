import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {spacing} from '../../theme';

const CustomButton = ({
  children,
  style,
  contentStyle,
  mode = 'contained',
  ...props
}) => (
  <Button
    mode={mode}
    style={[styles.button, style]}
    contentStyle={[styles.content, contentStyle]}
    {...props}>
    {children}
  </Button>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
  },
  content: {
    minHeight: 46,
    paddingHorizontal: spacing.sm,
  },
});

export default CustomButton;
