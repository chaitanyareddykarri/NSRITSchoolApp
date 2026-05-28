import React, {useEffect, useMemo, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  AttendanceCard,
  EmptyState,
  FilterTabs,
  ScreenContainer,
  SearchBar,
  SectionHeader,
  StudentListItem,
} from '../../components';
import {ATTENDANCE_STATUS} from '../../config/constants';
import {fetchAttendance} from '../../store/slices/attendanceSlice';

const absentStudents = [
  {id: 'student-2', name: 'Meera Rao', rollNo: '02', section: 'Class 1-A'},
  {id: 'student-7', name: 'Nikhil Sharma', rollNo: '07', section: 'Class 2-B'},
  {id: 'student-9', name: 'Sara Khan', rollNo: '09', section: 'Class 3-A'},
];

const WingAttendanceScreen = () => {
  const dispatch = useDispatch();
  const {items} = useSelector(state => state.attendance);
  const [filter, setFilter] = useState('today');
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(fetchAttendance({}));
  }, [dispatch]);

  const visibleAbsentees = useMemo(
    () =>
      absentStudents.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <ScreenContainer>
      <SectionHeader
        title="Wing Attendance"
        subtitle="Filter class/date and inspect absentees quickly"
      />
      <FilterTabs
        tabs={[
          {label: 'Today', value: 'today'},
          {label: 'This Week', value: 'week'},
          {label: 'Class 1-A', value: 'class-1-a'},
        ]}
        value={filter}
        onChange={setFilter}
      />
      {items.length ? (
        items.map(item => (
          <AttendanceCard
            key={item.id}
            title={`${item.classId} / ${item.sectionId}`}
            date={item.date}
            present={
              item.records?.filter(
                record => record.status === ATTENDANCE_STATUS.PRESENT,
              ).length || 0
            }
            absent={
              item.records?.filter(
                record => record.status === ATTENDANCE_STATUS.ABSENT,
              ).length || 0
            }
            late={
              item.records?.filter(
                record => record.status === ATTENDANCE_STATUS.LATE,
              ).length || 0
            }
            status={ATTENDANCE_STATUS.PRESENT}
          />
        ))
      ) : (
        <AttendanceCard
          title="Primary Wing"
          date="Today"
          present={92}
          absent={3}
          late={1}
          status={ATTENDANCE_STATUS.PRESENT}
        />
      )}
      <SectionHeader
        title="Absent Students"
        subtitle="Tap a student from the correction screen to edit"
      />
      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="Search absent students"
      />
      <FlatList
        data={visibleAbsentees}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({item}) => (
          <StudentListItem
            student={item}
            checked={false}
            status={ATTENDANCE_STATUS.ABSENT}
            onToggle={() => {}}
          />
        )}
        ListEmptyComponent={
          <EmptyState
            title="No absentees"
            message="No absent students match this filter."
          />
        }
      />
    </ScreenContainer>
  );
};

export default WingAttendanceScreen;
