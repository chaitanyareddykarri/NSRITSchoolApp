import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ATTENDANCE_STATUS, ROLE_LABELS} from '../../config/constants';
import useFeeAccess from '../../hooks/useFeeAccess';
import {logoutUser} from '../../store/slices/authSlice';
import {fetchAttendance} from '../../store/slices/attendanceSlice';
import {fetchFees} from '../../store/slices/feeSlice';
import {colors, spacing} from '../../theme';
import {formatCurrency} from '../../utils/formatters/currency';
import ScreenContainer from '../common/ScreenContainer';
import SectionHeader from '../common/SectionHeader';
import ActivityList from './ActivityList';
import AttendanceCard from './AttendanceCard';
import DashboardHeader from './DashboardHeader';
import StatCard from './StatCard';
import SummaryCard from './SummaryCard';

const defaultActivities = [
  {
    id: 'a1',
    title: 'Attendance submitted for Class 1-A',
    time: 'Today - 09:45 AM',
    icon: 'clipboard-check-outline',
  },
  {
    id: 'a2',
    title: 'Fee ledger updated for Meera Rao',
    time: 'Today - 11:10 AM',
    icon: 'cash-sync',
  },
  {
    id: 'a3',
    title: 'Academic structure review pending',
    time: 'Yesterday',
    icon: 'calendar-clock',
  },
];

const RoleDashboard = ({
  role,
  navigation,
  subtitle,
  primaryActions = [],
  stats = [],
}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const feeSummary = useSelector(state => state.fees.summary);
  const attendance = useSelector(state => state.attendance.items);
  const access = useFeeAccess();

  useEffect(() => {
    dispatch(fetchFees(access));
    dispatch(fetchAttendance({}));
  }, [access, dispatch]);

  const present =
    attendance[0]?.records?.filter(item => item.status === 'present').length ||
    attendance[0]?.records?.filter(item => item.status === ATTENDANCE_STATUS.PRESENT).length ||
    38;
  const absent =
    attendance[0]?.records?.filter(item => item.status === 'absent').length ||
    attendance[0]?.records?.filter(item => item.status === ATTENDANCE_STATUS.ABSENT).length ||
    3;

  return (
    <ScreenContainer>
      <DashboardHeader
        name={user?.name}
        role={role}
        subtitle={subtitle || ROLE_LABELS[role]}
        onLogout={() => dispatch(logoutUser())}
      />

      <View style={styles.grid}>
        <StatCard
          title="Attendance"
          value={`${present}/${present + absent}`}
          icon="account-check"
          tone={colors.success}
        />
        <StatCard
          title="Fee Due"
          value={formatCurrency(feeSummary.dueAmount)}
          icon="cash-clock"
          tone={colors.danger}
          onPress={() => navigation.navigate('FeeDashboard')}
        />
        {stats.map(item => (
          <StatCard key={item.title} {...item} />
        ))}
      </View>

      <SectionHeader
        title="Quick Actions"
        subtitle="Common workflows for this role"
      />
      <View style={styles.grid}>
        {primaryActions.map(action => (
          <StatCard
            key={action.title}
            title={action.title}
            value={action.value}
            icon={action.icon}
            tone={action.tone}
            onPress={() => navigation.navigate(action.route)}
          />
        ))}
      </View>

      <SectionHeader
        title="Today's Attendance"
        subtitle="Live operational snapshot"
      />
      <AttendanceCard
        title="Class 1 - Section A"
        date="Today"
        present={present}
        absent={absent}
        late={1}
        status={ATTENDANCE_STATUS.PRESENT}
      />

      <SectionHeader
        title="Fee Summary"
        subtitle="Collection health and pending balances"
      />
      <SummaryCard
        title="Overall Collection"
        value={formatCurrency(feeSummary.paidAmount)}
        subtitle={`${formatCurrency(feeSummary.dueAmount)} pending`}
        progress={feeSummary.collectionRate}
        tone={colors.primary}
      />

      <SectionHeader
        title="Recent Activity"
        subtitle="Latest school ERP events"
      />
      <ActivityList items={defaultActivities} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.sm,
  },
});

export default RoleDashboard;
