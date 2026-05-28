import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import CustomButton from '../buttons/CustomButton';
import {colors, spacing, typography} from '../../theme';

const SectionHeader = ({title, subtitle, actionLabel, onAction}) => (
  <View style={styles.container}>
    <View style={styles.copy}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
    {actionLabel ? (
      <CustomButton compact mode="text" onPress={onAction}>
        {actionLabel}
      </CustomButton>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
    marginTop: spacing.lg,
  },
  copy: {
    flex: 1,
  },
  title: {
    ...typography.sectionTitle,
    color: colors.text,
  },
  subtitle: {
    color: colors.textMuted,
    marginTop: spacing.xxs,
  },
});

export default SectionHeader;
