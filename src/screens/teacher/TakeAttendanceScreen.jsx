import React, {useMemo, useState} from 'react';
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
import {ATTENDANCE_STATUS} from '../../config/constants';
import {markAttendance} from '../../store/slices/attendanceSlice';
import {spacing} from '../../theme';
import {toISODate} from '../../utils/helpers/dateHelpers';

const demoStudents = [
  {id: 'student-1', name: 'Aarav Kumar', rollNo: '01', section: 'Class 1-A'},
  {id: 'student-2', name: 'Meera Rao', rollNo: '02', section: 'Class 1-A'},
  {id: 'student-3', name: 'Kavya Reddy', rollNo: '03', section: 'Class 1-A'},
  {id: 'student-4', name: 'Rohan Varma', rollNo: '04', section: 'Class 1-A'},
];

const TakeAttendanceScreen = () => {
  const dispatch = useDispatch();
  const {submitting, error} = useSelector(state => state.attendance);
  const user = useSelector(state => state.auth.user);
  const [query, setQuery] = useState('');
  const [section, setSection] = useState('1-A');
  const [statuses, setStatuses] = useState(
    demoStudents.reduce(
      (acc, student) => ({
        ...acc,
        [student.id]: ATTENDANCE_STATUS.PRESENT,
      }),
      {},
    ),
  );

  const visibleStudents = useMemo(
    () =>
      demoStudents.filter(student =>
        student.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  const setAll = status => {
    setStatuses(
      demoStudents.reduce(
        (acc, student) => ({
          ...acc,
          [student.id]: status,
        }),
        {},
      ),
    );
  };

  const toggleStudent = studentId => {
    setStatuses(current => ({
      ...current,
      [studentId]:
        current[studentId] === ATTENDANCE_STATUS.PRESENT
          ? ATTENDANCE_STATUS.ABSENT
          : ATTENDANCE_STATUS.PRESENT,
    }));
  };

  const handleSubmit = () => {
    dispatch(
      markAttendance({
        classId: 'class-1',
        sectionId: section,
        date: toISODate(),
        submittedBy: user?.uid,
        records: demoStudents.map(student => ({
          studentId: student.id,
          studentName: student.name,
          status: statuses[student.id],
        })),
      }),
    );
  };

  return (
    <ScreenContainer>
      <SectionHeader
        title="Fast Attendance"
        subtitle="Search, bulk mark, and submit once for today"
      />
      <FilterTabs
        tabs={[
          {label: 'Class 1-A', value: '1-A'},
          {label: 'Class 1-B', value: '1-B'},
          {label: 'Class 2-A', value: '2-A'},
        ]}
        value={section}
        onChange={setSection}
      />
      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="Search students"
      />
      <View style={styles.bulkRow}>
        <CustomButton
          mode="outlined"
          onPress={() => setAll(ATTENDANCE_STATUS.PRESENT)}>
          All Present
        </CustomButton>
        <CustomButton
          mode="outlined"
          onPress={() => setAll(ATTENDANCE_STATUS.ABSENT)}>
          All Absent
        </CustomButton>
      </View>
      <FlatList
        data={visibleStudents}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({item}) => (
          <StudentListItem
            student={item}
            checked={statuses[item.id] === ATTENDANCE_STATUS.PRESENT}
            status={statuses[item.id]}
            onToggle={() => toggleStudent(item.id)}
          />
        )}
      />
      <HelperText type="error" visible={Boolean(error)}>
        {error}
      </HelperText>
      <CustomButton
        loading={submitting}
        disabled={submitting}
        onPress={handleSubmit}>
        Submit Attendance
      </CustomButton>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  bulkRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
});

export default TakeAttendanceScreen;
