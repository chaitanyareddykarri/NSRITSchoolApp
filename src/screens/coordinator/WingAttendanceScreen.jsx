import React, {useMemo, useState} from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {
  EmptyState,
  ScreenContainer,
  SearchBar,
  SectionHeader,
  StudentListItem,
} from '../../components';
import {ATTENDANCE_STATUS} from '../../config/constants';
import {getAccessScope} from '../../services/rbacScope';
import studentService from '../../services/students/studentService';

const WingAttendanceScreen = () => {
  const user = useSelector(state => state.auth.user);
  const [query, setQuery] = useState('');
  const [absentees, setAbsentees] = useState([]);
  const [error, setError] = useState('');
  const scope = useMemo(() => getAccessScope(user), [user]);

  const handleSearch = async value => {
    setQuery(value);

    if (!value.trim()) {
      setAbsentees([]);
      return;
    }

    try {
      const results = await studentService.searchStudents(
        {branchId: scope.branchId, searchText: value},
        scope,
      );
      setAbsentees(results);
    } catch (searchError) {
      setError(searchError.message);
    }
  };

  return (
    <ScreenContainer>
      <SectionHeader
        title="Wing Attendance"
        subtitle="Search wing students and review attendance from submitted records"
      />
      <SearchBar
        value={query}
        onChangeText={handleSearch}
        placeholder="Search students in your wing"
      />
      <FlatList
        data={absentees}
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
            checked={false}
            status={ATTENDANCE_STATUS.ABSENT}
            onToggle={() => {}}
          />
        )}
        ListEmptyComponent={
          <EmptyState
            title={error ? 'Unable to load attendance' : 'No students found'}
            message={error || 'Search by student name, ID, or parent phone.'}
          />
        }
      />
    </ScreenContainer>
  );
};

export default WingAttendanceScreen;
