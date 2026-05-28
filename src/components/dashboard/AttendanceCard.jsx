import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import StatusBadge from '../common/StatusBadge';
import {colors, radius, shadows, spacing, typography} from '../../theme';

const AttendanceCard = ({
  title,
  date,
  present,
  absent,
  late,
  status,
  onPress,
}) => (
  <View style={styles.card} onTouchEnd={onPress}>
    <View style={styles.row}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <StatusBadge
        status={status || 'info'}
        label={status ? undefined : 'Today'}
      />
    </View>
    <View style={styles.metrics}>
      <Text style={styles.metric}>{present} Present</Text>
      <Text style={styles.metric}>{absent} Absent</Text>
      <Text style={styles.metric}>{late} Late</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    ...shadows.soft,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    marginBottom: spacing.md,
    padding: spacing.lg,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...typography.sectionTitle,
    color: colors.text,
  },
  date: {
    color: colors.textMuted,
    marginTop: spacing.xxs,
  },
  metrics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  metric: {
    color: colors.textMuted,
    fontWeight: '700',
  },
});

export default AttendanceCard;
