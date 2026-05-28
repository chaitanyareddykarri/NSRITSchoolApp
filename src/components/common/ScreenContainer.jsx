import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors, spacing} from '../../theme';

const ScreenContainer = ({children, scroll = true, style}) => {
  const Wrapper = scroll ? ScrollView : View;

  return (
    <Wrapper
      contentContainerStyle={scroll ? styles.scrollContent : undefined}
      style={[styles.container, style]}>
      {children}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    padding: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
});

export default ScreenContainer;
