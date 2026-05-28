import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {ATTENDANCE_STATUS, FEE_STATUS} from '../../config/constants';
import {colors, radius, spacing, typography} from '../../theme';

const BADGE_THEME = {
  [FEE_STATUS.PAID]: {
    bg: colors.successSoft,
    fg: colors.success,
    label: 'Paid',
  },
  [FEE_STATUS.PARTIAL]: {
    bg: colors.warningSoft,
    fg: colors.warning,
    label: 'Partial',
  },
  [FEE_STATUS.DUE]: {bg: colors.dangerSoft, fg: colors.danger, label: 'Due'},
  [FEE_STATUS.OVERDUE]: {
    bg: colors.dangerSoft,
    fg: colors.danger,
    label: 'Overdue',
  },
  [ATTENDANCE_STATUS.PRESENT]: {
    bg: colors.successSoft,
    fg: colors.success,
    label: 'Present',
  },
  [ATTENDANCE_STATUS.ABSENT]: {
    bg: colors.dangerSoft,
    fg: colors.danger,
    label: 'Absent',
  },
  [ATTENDANCE_STATUS.LATE]: {
    bg: colors.warningSoft,
    fg: colors.warning,
    label: 'Late',
  },
  holiday: {bg: colors.surfaceAlt, fg: colors.textMuted, label: 'Holiday'},
  info: {bg: colors.infoSoft, fg: colors.info, label: 'Info'},
};

const StatusBadge = ({status = 'info', label}) => {
  const theme = BADGE_THEME[status] || BADGE_THEME.info;

  return (
    <View style={[styles.badge, {backgroundColor: theme.bg}]}>
      <Text style={[styles.label, {color: theme.fg}]}>
        {label || theme.label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  label: {
    ...typography.caption,
    textTransform: 'capitalize',
  },
});

export default StatusBadge;
