import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {EmptyState, Header, ScreenContainer, StudentListItem} from '../../components';
import studentService from '../../services/students/studentService';
import teacherService from '../../services/teachers/teacherService';

const StudentsListScreen = () => {
  const user = useSelector(state => state.auth.user);
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const load = async () => {
      const assignments = await teacherService.getAssignments({teacherId: user?.id});
      const assignment = assignments[0];
      if (assignment?.sectionId) {
        setStudents(await studentService.getStudentsBySection(assignment.sectionId));
      }
    };

    load().catch(loadError => setError(loadError.message));
  }, [user]);

  return (
    <ScreenContainer>
      <Header title="Students" subtitle="Assigned section roster" />
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
            checked
            status="info"
          />
        )}
        ListEmptyComponent={<EmptyState title="No students" message={error || 'No assigned section roster found.'} />}
      />
    </ScreenContainer>
  );
};

export default StudentsListScreen;
