import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {spacing} from '../../theme';

const CustomInput = ({style, ...props}) => (
  <TextInput
    mode="outlined"
    style={[styles.input, style]}
    autoCapitalize="none"
    {...props}
  />
);

const styles = StyleSheet.create({
  input: {
    marginBottom: spacing.md,
  },
});

export default CustomInput;
