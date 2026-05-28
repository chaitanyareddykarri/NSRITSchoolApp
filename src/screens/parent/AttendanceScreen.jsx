import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  CalendarAttendance,
  ScreenContainer,
  SectionHeader,
  StatCard,
  SummaryCard,
} from '../../components';
import {ATTENDANCE_STATUS} from '../../config/constants';
import {colors, spacing} from '../../theme';

const attendanceRecords = {
  '2026-05-01': ATTENDANCE_STATUS.PRESENT,
  '2026-05-02': ATTENDANCE_STATUS.PRESENT,
  '2026-05-04': ATTENDANCE_STATUS.ABSENT,
  '2026-05-05': ATTENDANCE_STATUS.PRESENT,
  '2026-05-06': ATTENDANCE_STATUS.PRESENT,
  '2026-05-07': ATTENDANCE_STATUS.PRESENT,
  '2026-05-08': ATTENDANCE_STATUS.PRESENT,
  '2026-05-11': ATTENDANCE_STATUS.PRESENT,
  '2026-05-12': ATTENDANCE_STATUS.ABSENT,
  '2026-05-13': ATTENDANCE_STATUS.PRESENT,
  '2026-05-14': ATTENDANCE_STATUS.PRESENT,
  '2026-05-15': ATTENDANCE_STATUS.PRESENT,
  '2026-05-18': ATTENDANCE_STATUS.PRESENT,
  '2026-05-19': ATTENDANCE_STATUS.PRESENT,
  '2026-05-20': ATTENDANCE_STATUS.PRESENT,
  '2026-05-21': ATTENDANCE_STATUS.PRESENT,
  '2026-05-22': ATTENDANCE_STATUS.ABSENT,
  '2026-05-25': ATTENDANCE_STATUS.PRESENT,
  '2026-05-26': ATTENDANCE_STATUS.PRESENT,
  '2026-05-27': ATTENDANCE_STATUS.PRESENT,
};

const AttendanceScreen = () => {
  const present = Object.values(attendanceRecords).filter(
    item => item === ATTENDANCE_STATUS.PRESENT,
  ).length;
  const absent = Object.values(attendanceRecords).filter(
    item => item === ATTENDANCE_STATUS.ABSENT,
  ).length;
  const total = present + absent;

  return (
    <ScreenContainer>
      <SectionHeader
        title="May 2026 Attendance"
        subtitle="Monthly child attendance calendar"
      />
      <SummaryCard
        title="Attendance Percentage"
        value={`${Math.round((present / total) * 100)}%`}
        subtitle={`${present} present - ${absent} absent`}
        progress={present / total}
        tone={colors.success}
      />
      <View style={styles.grid}>
        <StatCard
          title="Present"
          value={present}
          icon="check-circle-outline"
          tone={colors.success}
        />
        <StatCard
          title="Absent"
          value={absent}
          icon="close-circle-outline"
          tone={colors.danger}
        />
      </View>
      <CalendarAttendance
        monthDate={new Date('2026-05-01')}
        records={attendanceRecords}
      />
      <SectionHeader title="Legend" />
      <View style={styles.grid}>
        <StatCard
          title="Green"
          value="Present"
          icon="circle"
          tone={colors.success}
        />
        <StatCard
          title="Red"
          value="Absent"
          icon="circle"
          tone={colors.danger}
        />
        <StatCard
          title="Gray"
          value="Holiday"
          icon="circle"
          tone={colors.textMuted}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
});

export default AttendanceScreen;
