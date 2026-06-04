import React, {useEffect, useMemo, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomButton, EmptyState, ScreenContainer, SearchBar, SectionHeader} from '../../components';
import {getAccessScope} from '../../services/rbacScope';
import studentService from '../../services/students/studentService';
import {fetchStudentsForRole} from '../../store/slices/studentSlice';

const ManageStudentsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const {items, loading} = useSelector(state => state.students);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const scope = useMemo(() => getAccessScope(user), [user]);

  useEffect(() => {
    dispatch(fetchStudentsForRole(scope));
  }, [dispatch, scope]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query.trim()) {
        const results = await studentService.searchStudents(
          {branchId: scope.branchId, searchText: query},
          scope,
        );
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [query, scope]);

  const data = query.trim() ? searchResults : items;

  return (
    <ScreenContainer>
      <SectionHeader title="Students" subtitle="Search by name, student ID, or parent phone" />
      <SearchBar value={query} onChangeText={setQuery} placeholder="Search students" />
      <CustomButton mode="outlined" onPress={() => navigation.navigate('CreateStudent')}>
        Create Student
      </CustomButton>
      <CustomButton mode="text" onPress={() => navigation.navigate('BulkStudentUpload')}>
        Bulk CSV Upload
      </CustomButton>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        refreshing={loading}
        renderItem={({item}) => (
          <CustomButton mode="outlined">
            {item.studentId} - {item.fullName}
          </CustomButton>
        )}
        ListEmptyComponent={<EmptyState title="No students" message="Create or upload students to see them here." />}
      />
    </ScreenContainer>
  );
};

export default ManageStudentsScreen;
