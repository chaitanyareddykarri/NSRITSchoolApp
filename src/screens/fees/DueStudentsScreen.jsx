import React, {useMemo, useState} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  EmptyState,
  FeeCard,
  ScreenContainer,
  SearchBar,
  SectionHeader,
} from '../../components';
import {setSelectedStudentFee} from '../../store/slices/feeSlice';

const DueStudentsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const records = useSelector(state => state.fees.records);

  const dueStudents = useMemo(
    () =>
      records.filter(
        item =>
          item.dueAmount > 0 &&
          item.studentName.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, records],
  );

  const openDetails = item => {
    dispatch(setSelectedStudentFee(item));
    navigation.navigate('StudentFeeDetails');
  };

  return (
    <ScreenContainer>
      <SectionHeader
        title="Due Students"
        subtitle="Students with pending balances"
      />
      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="Search due students"
      />
      <FlatList
        data={dueStudents}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({item}) => (
          <FeeCard student={item} onPress={() => openDetails(item)} />
        )}
        ListEmptyComponent={
          <EmptyState
            title="No dues"
            message="No students match this due filter."
          />
        }
      />
    </ScreenContainer>
  );
};

export default DueStudentsScreen;
