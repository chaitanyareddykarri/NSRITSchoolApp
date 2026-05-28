import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  DashboardCard,
  EmptyState,
  Header,
  ScreenContainer,
} from '../../components';
import {fetchAttendance} from '../../store/slices/attendanceSlice';

const ViewAllAttendanceScreen = () => {
  const dispatch = useDispatch();
  const {items} = useSelector(state => state.attendance);

  useEffect(() => {
    dispatch(fetchAttendance({}));
  }, [dispatch]);

  return (
    <ScreenContainer>
      <Header
        title="All Attendance"
        subtitle="Principal read-only attendance view"
      />
      {items.length ? (
        items.map(item => (
          <DashboardCard
            key={item.id}
            title={`${item.classId} / ${item.sectionId}`}
            value={item.date}
            description={`Submitted by ${item.submittedBy}`}
          />
        ))
      ) : (
        <EmptyState
          title="No attendance submitted"
          message="Teacher submissions will appear here."
        />
      )}
    </ScreenContainer>
  );
};

export default ViewAllAttendanceScreen;
