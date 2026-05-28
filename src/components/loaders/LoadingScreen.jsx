import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator, Text} from 'react-native-paper';
import {APP_NAME} from '../../config/constants';
import {colors, spacing, typography} from '../../theme';

const LoadingScreen = ({message = 'Preparing your workspace'}) => (
  <View style={styles.container}>
    <Text style={styles.brand}>{APP_NAME}</Text>
    <ActivityIndicator animating size="large" color={colors.primary} />
    <Text style={styles.message}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'center',
    padding: spacing.xl,
  },
  brand: {
    ...typography.title,
    color: colors.primaryDark,
    marginBottom: spacing.xl,
  },
  message: {
    color: colors.textMuted,
    marginTop: spacing.lg,
  },
});

export default LoadingScreen;
