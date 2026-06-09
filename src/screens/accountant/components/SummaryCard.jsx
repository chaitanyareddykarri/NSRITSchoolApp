import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import {colors, spacing, radius, shadows} from '../../../theme';

const SummaryCard = ({
  title,
  value,
  subtitle,
  icon = 'currency-usd',
  tone = colors.primary,
  percentage,
  isIncrease = true,
  style,
}) => {
  return (
    <View style={[styles.card, {backgroundColor: tone}, style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.valueRow}>
        <Text style={styles.value}>{value}</Text>
        <IconButton
          icon={icon}
          iconColor="rgba(255, 255, 255, 0.42)"
          size={36}
          style={styles.icon}
        />
      </View>
      {(percentage !== undefined || subtitle) && (
        <View style={styles.footer}>
          {percentage !== undefined && (
            <View style={styles.trendContainer}>
              <IconButton
                icon={isIncrease ? 'trending-up' : 'trending-down'}
                iconColor="rgba(255, 255, 255, 0.85)"
                size={14}
                style={styles.trendIcon}
              />
              <Text style={styles.trendText}>
                {percentage}% {isIncrease ? 'increase' : 'decrease'}
              </Text>
            </View>
          )}
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xl,
    padding: spacing.lg,
    elevation: 4,
    ...shadows.medium,
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: spacing.xs,
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  value: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.white,
    letterSpacing: -0.5,
  },
  icon: {
    margin: 0,
    position: 'absolute',
    right: -10,
    bottom: -10,
  },
  footer: {
    marginTop: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 2,
    paddingHorizontal: spacing.xs,
    borderRadius: radius.sm,
  },
  trendIcon: {
    margin: 0,
  },
  trendText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.white,
  },
  subtitle: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',
  },
});

export default SummaryCard;
