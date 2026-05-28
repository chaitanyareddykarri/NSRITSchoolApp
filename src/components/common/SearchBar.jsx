import React from 'react';
import {StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {colors, radius, spacing} from '../../theme';

const SearchBar = ({value, onChangeText, placeholder = 'Search', style}) => (
  <Searchbar
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    style={[styles.search, style]}
    inputStyle={styles.input}
  />
);

const styles = StyleSheet.create({
  search: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    marginBottom: spacing.md,
  },
  input: {
    minHeight: 0,
  },
});

export default SearchBar;
