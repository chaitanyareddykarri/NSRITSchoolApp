import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, radius, shadows, spacing, typography} from '../../theme';

const DashboardCard = ({
  title,
  value,
  description,
  onPress,
  icon = 'view-dashboard-outline',
}) => (
  <Card mode="outlined" onPress={onPress} style={styles.card}>
    <Card.Content>
      <View style={styles.row}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={icon}
            size={22}
            color={colors.primary}
          />
        </View>
        <Text style={styles.value}>{value}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    ...shadows.soft,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    marginBottom: spacing.md,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: radius.md,
    height: 42,
    justifyContent: 'center',
    width: 42,
  },
  value: {
    ...typography.title,
    color: colors.secondary,
  },
  title: {
    ...typography.subtitle,
    color: colors.text,
    marginTop: spacing.xs,
  },
  description: {
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
});

export default DashboardCard;
