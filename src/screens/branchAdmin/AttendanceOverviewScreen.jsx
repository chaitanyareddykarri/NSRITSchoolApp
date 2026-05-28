import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  DashboardCard,
  EmptyState,
  Header,
  ScreenContainer,
} from '../../components';
import {fetchAttendance} from '../../store/slices/attendanceSlice';

const AttendanceOverviewScreen = () => {
  const dispatch = useDispatch();
  const {items} = useSelector(state => state.attendance);

  useEffect(() => {
    dispatch(fetchAttendance({}));
  }, [dispatch]);

  return (
    <ScreenContainer>
      <Header
        title="Attendance Overview"
        subtitle="Branch-wide attendance submissions"
      />
      {items.length ? (
        items.map(item => (
          <DashboardCard
            key={item.id}
            title={`${item.classId} / ${item.sectionId}`}
            value={item.date}
            description={`${item.records?.length || 0} students recorded`}
          />
        ))
      ) : (
        <EmptyState
          title="No attendance"
          message="Attendance entries will appear after teachers submit them."
        />
      )}
    </ScreenContainer>
  );
};

export default AttendanceOverviewScreen;
