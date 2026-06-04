import React, {useEffect, useMemo, useState} from 'react';
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
import {ATTENDANCE_STATUS} from '../../config/constants';
import attendanceService from '../../services/attendance/attendanceService';
import {getAccessScope} from '../../services/rbacScope';
import studentService from '../../services/students/studentService';
import teacherService from '../../services/teachers/teacherService';
import {spacing} from '../../theme';
import {toISODate} from '../../utils/helpers/dateHelpers';

const TakeAttendanceScreen = () => {
  const user = useSelector(state => state.auth.user);
  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [statuses, setStatuses] = useState({});
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const scope = useMemo(() => getAccessScope(user), [user]);

  useEffect(() => {
    const load = async () => {
      const teacherAssignments = await teacherService.getAssignments({teacherId: user?.id});
      const assignment = teacherAssignments[0];
      setAssignments(teacherAssignments);
      setSelectedAssignment(assignment);

      if (assignment?.sectionId) {
        const sectionStudents = await studentService.getStudentsBySection(assignment.sectionId);
        setStudents(sectionStudents);
        setStatuses(
          sectionStudents.reduce(
            (acc, student) => ({...acc, [student.id]: ATTENDANCE_STATUS.PRESENT}),
            {},
          ),
        );
      }
    };

    load().catch(loadError => setError(loadError.message));
  }, [user]);

  const visibleStudents = useMemo(
    () =>
      students.filter(student =>
        `${student.fullName} ${student.studentId}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, students],
  );

  const setAll = status => {
    setStatuses(
      students.reduce((acc, student) => ({...acc, [student.id]: status}), {}),
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

  const handleSubmit = async () => {
    if (!selectedAssignment) {
      setError('No section assignment found for this teacher.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      for (const student of students) {
        await attendanceService.markAttendance(
          {
            studentId: student.id,
            academicClassId: selectedAssignment.academicClassId,
            sectionId: selectedAssignment.sectionId,
            attendanceDate: toISODate(),
            status: statuses[student.id],
            markedById: user.id,
          },
          scope,
        );
      }
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ScreenContainer>
      <SectionHeader title="Take Attendance" subtitle="Teachers can submit only assigned sections" />
      <SearchBar value={query} onChangeText={setQuery} placeholder="Search assigned students" />
      <View style={styles.bulkRow}>
        <CustomButton mode="outlined" onPress={() => setAll(ATTENDANCE_STATUS.PRESENT)}>
          All Present
        </CustomButton>
        <CustomButton mode="outlined" onPress={() => setAll(ATTENDANCE_STATUS.ABSENT)}>
          All Absent
        </CustomButton>
      </View>
      <FlatList
        data={visibleStudents}
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
            onToggle={() => toggleStudent(item.id)}
          />
        )}
        ListEmptyComponent={<EmptyState title="No assigned students" message="Ask the coordinator to assign a section." />}
      />
      <HelperText type="error" visible={Boolean(error)}>
        {error}
      </HelperText>
      <CustomButton loading={submitting} disabled={submitting || !assignments.length} onPress={handleSubmit}>
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
