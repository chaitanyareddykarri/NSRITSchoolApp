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
import {FEE_STATUS} from '../../config/constants';
import {setSelectedStudentFee} from '../../store/slices/feeSlice';

const PaidStudentsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const records = useSelector(state => state.fees.records);

  const paidStudents = useMemo(
    () =>
      records.filter(
        item =>
          item.status === FEE_STATUS.PAID &&
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
        title="Paid Students"
        subtitle="Fully cleared fee records"
      />
      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="Search paid students"
      />
      <FlatList
        data={paidStudents}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({item}) => (
          <FeeCard student={item} onPress={() => openDetails(item)} />
        )}
        ListEmptyComponent={
          <EmptyState
            title="No paid students"
            message="No students match this filter."
          />
        }
      />
    </ScreenContainer>
  );
};

export default PaidStudentsScreen;
