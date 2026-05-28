import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, radius, shadows, spacing, typography} from '../../theme';

const StatCard = ({
  title,
  value,
  icon = 'chart-box-outline',
  tone = colors.primary,
  description,
  onPress,
}) => (
  <TouchableRipple borderless onPress={onPress} style={styles.wrapper}>
    <View style={styles.card}>
      <View style={[styles.icon, {backgroundColor: `${tone}1A`}]}>
        <MaterialCommunityIcons name={icon} size={22} color={tone} />
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
    </View>
  </TouchableRipple>
);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: radius.lg,
    flex: 1,
    minWidth: '47%',
  },
  card: {
    ...shadows.soft,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    minHeight: 132,
    padding: spacing.lg,
  },
  icon: {
    alignItems: 'center',
    borderRadius: radius.md,
    height: 42,
    justifyContent: 'center',
    marginBottom: spacing.md,
    width: 42,
  },
  value: {
    ...typography.metric,
    color: colors.text,
  },
  title: {
    ...typography.caption,
    color: colors.textMuted,
    marginTop: spacing.xs,
    textTransform: 'uppercase',
  },
  description: {
    color: colors.textMuted,
    marginTop: spacing.sm,
  },
});

export default StatCard;
