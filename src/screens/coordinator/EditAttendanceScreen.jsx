import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {HelperText} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {
  CustomButton,
  EmptyState,
  ScreenContainer,
  SearchBar,
  SectionHeader,
  StudentListItem,
} from '../../components';
import {ATTENDANCE_STATUS, USER_ROLES} from '../../config/constants';
import attendanceService from '../../services/attendance/attendanceService';
import {getAccessScope} from '../../services/rbacScope';
import studentService from '../../services/students/studentService';
import {spacing} from '../../theme';

const EditAttendanceScreen = () => {
  const user = useSelector(state => state.auth.user);
  const [query, setQuery] = useState('');
  const [students, setStudents] = useState([]);
  const [statuses, setStatuses] = useState({});
  const [error, setError] = useState('');
  const scope = useMemo(() => getAccessScope(user), [user]);

  const handleSearch = async value => {
    setQuery(value);
    setError('');

    if (!value.trim()) {
      setStudents([]);
      return;
    }

    try {
      const results = await studentService.searchStudents(
        {branchId: scope.branchId, searchText: value},
        scope,
      );
      setStudents(results);
      setStatuses(
        results.reduce(
          (acc, student) => ({...acc, [student.id]: ATTENDANCE_STATUS.PRESENT}),
          {},
        ),
      );
    } catch (searchError) {
      setError(searchError.message);
    }
  };

  const handleSave = async () => {
    setError('');

    try {
      const [student] = students;
      if (!student?.attendanceId) {
        throw new Error('Select an existing attendance record before saving corrections.');
      }

      await attendanceService.correctAttendance({
        attendanceId: student.attendanceId,
        actorRole: USER_ROLES.COORDINATOR,
        scope,
        records: [
          {
            studentId: student.id,
            status: statuses[student.id],
            editedById: user.id,
            wingId: student.wingId,
          },
        ],
      });
    } catch (saveError) {
      setError(saveError.message);
    }
  };

  return (
    <ScreenContainer>
      <SectionHeader
        title="Correct Attendance"
        subtitle="Coordinator edits are restricted to the assigned wing"
      />
      <SearchBar value={query} onChangeText={handleSearch} placeholder="Search attendance record" />
      <FlatList
        data={students}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({item}) => (
          <StudentListItem
            student={{
              id: item.id,
              name: item.fullName,
              rollNo: item.studentId,
              section: item.sectionId,
            }}
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
        ListEmptyComponent={<EmptyState title="No records" message="Search for a student attendance record." />}
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
