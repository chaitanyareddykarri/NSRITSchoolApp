import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {HelperText} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  CustomButton,
  FilterTabs,
  ScreenContainer,
  SearchBar,
  SectionHeader,
  StudentListItem,
} from '../../components';
import {ATTENDANCE_STATUS, USER_ROLES} from '../../config/constants';
import {
  correctAttendance,
  fetchAttendance,
} from '../../store/slices/attendanceSlice';
import {spacing} from '../../theme';

const editableStudents = [
  {id: 'student-1', name: 'Aarav Kumar', rollNo: '01', section: 'Class 1-A'},
  {id: 'student-2', name: 'Meera Rao', rollNo: '02', section: 'Class 1-A'},
  {id: 'student-3', name: 'Kavya Reddy', rollNo: '03', section: 'Class 1-A'},
];

const EditAttendanceScreen = () => {
  const dispatch = useDispatch();
  const {items, error} = useSelector(state => state.attendance);
  const [query, setQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('today');
  const [statuses, setStatuses] = useState({
    'student-1': ATTENDANCE_STATUS.PRESENT,
    'student-2': ATTENDANCE_STATUS.ABSENT,
    'student-3': ATTENDANCE_STATUS.PRESENT,
  });

  useEffect(() => {
    dispatch(fetchAttendance({}));
  }, [dispatch]);

  const handleSave = () => {
    const attendanceId = items[0]?.id || 'attendance-1';
    dispatch(
      correctAttendance({
        attendanceId,
        actorRole: USER_ROLES.COORDINATOR,
        records: editableStudents.map(student => ({
          studentId: student.id,
          studentName: student.name,
          status: statuses[student.id],
        })),
      }),
    );
  };

  const visibleStudents = editableStudents.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <ScreenContainer>
      <SectionHeader
        title="Correct Attendance"
        subtitle="Coordinator-only submitted attendance correction"
      />
      <FilterTabs
        tabs={[
          {label: 'Today', value: 'today'},
          {label: 'Yesterday', value: 'yesterday'},
          {label: 'Class 1-A', value: 'class-1-a'},
        ]}
        value={dateFilter}
        onChange={setDateFilter}
      />
      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="Search students to correct"
      />
      <FlatList
        data={visibleStudents}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({item}) => (
          <StudentListItem
            student={item}
            checked={statuses[item.id] === ATTENDANCE_STATUS.PRESENT}
            status={statuses[item.id]}
            onToggle={() =>
              setStatuses(current => ({
                ...current,
                [item.id]:
                  current[item.id] === ATTENDANCE_STATUS.PRESENT
                    ? ATTENDANCE_STATUS.ABSENT
                    : ATTENDANCE_STATUS.PRESENT,
              }))
            }
          />
        )}
      />
      <HelperText type="error" visible={Boolean(error)}>
        {error}
      </HelperText>
      <View style={styles.footer}>
        <CustomButton onPress={handleSave}>Save Corrections</CustomButton>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: spacing.md,
  },
});

export default EditAttendanceScreen;
