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

const FeeLedgerScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const records = useSelector(state => state.fees.records);

  const filteredRecords = useMemo(
    () =>
      records.filter(item =>
        `${item.studentName} ${item.className} ${item.sectionName}`
          .toLowerCase()
          .includes(query.toLowerCase()),
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
        title="Fee Ledger"
        subtitle="Student-wise fee balances and ledger status"
      />
      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="Search ledger"
      />
      <FlatList
        data={filteredRecords}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        renderItem={({item}) => (
          <FeeCard student={item} onPress={() => openDetails(item)} />
        )}
        ListEmptyComponent={
          <EmptyState
            title="No ledger records"
            message="Fee records will appear here."
          />
        }
      />
    </ScreenContainer>
  );
};

export default FeeLedgerScreen;
