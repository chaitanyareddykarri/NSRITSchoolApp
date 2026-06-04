import React, {useEffect, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  CalendarAttendance,
  EmptyState,
  ScreenContainer,
  SectionHeader,
  StatCard,
  SummaryCard,
} from '../../components';
import {ATTENDANCE_STATUS} from '../../config/constants';
import attendanceService from '../../services/attendance/attendanceService';
import parentService from '../../services/parents/parentService';
import {colors, spacing} from '../../theme';

const getMonthRange = date => {
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return {
    fromDate: start.toISOString().slice(0, 10),
    toDate: end.toISOString().slice(0, 10),
  };
};

const AttendanceScreen = () => {
  const user = useSelector(state => state.auth.user);
  const [children, setChildren] = useState([]);
  const [records, setRecords] = useState([]);
  const [error, setError] = useState('');
  const monthDate = useMemo(() => new Date(), []);

  useEffect(() => {
    const load = async () => {
      const parentChildren = await parentService.getParentChildren(user?.parentId || user?.id);
      setChildren(parentChildren);

      if (parentChildren[0]?.id) {
        const monthRange = getMonthRange(monthDate);
        const attendance = await attendanceService.getAttendance({
          studentId: parentChildren[0].id,
          ...monthRange,
        });
        setRecords(attendance);
      }
    };

    load().catch(loadError => setError(loadError.message));
  }, [monthDate, user]);

  const attendanceRecords = useMemo(
    () =>
      records.reduce(
        (acc, item) => ({
          ...acc,
          [item.attendanceDate]: item.status,
        }),
        {},
      ),
    [records],
  );

  const present = records.filter(item => item.status === ATTENDANCE_STATUS.PRESENT).length;
  const absent = records.filter(item => item.status === ATTENDANCE_STATUS.ABSENT).length;
  const total = present + absent;
  const progress = total ? present / total : 0;

  if (error) {
    return (
      <ScreenContainer>
        <EmptyState title="Unable to load attendance" message={error} />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <SectionHeader
        title="Monthly Attendance"
        subtitle={children[0]?.fullName || 'Child attendance calendar'}
      />
      <SummaryCard
        title="Attendance Percentage"
        value={`${Math.round(progress * 100)}%`}
        subtitle={`${present} present - ${absent} absent`}
        progress={progress}
        tone={colors.success}
      />
      <View style={styles.grid}>
        <StatCard title="Present" value={present} icon="check-circle-outline" tone={colors.success} />
        <StatCard title="Absent" value={absent} icon="close-circle-outline" tone={colors.danger} />
      </View>
      <CalendarAttendance monthDate={monthDate} records={attendanceRecords} />
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
