import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  EmptyState,
  PaymentCard,
  ScreenContainer,
  SectionHeader,
} from '../../components';
import useFeeAccess from '../../hooks/useFeeAccess';
import {fetchFees} from '../../store/slices/feeSlice';

const PaymentHistoryScreen = () => {
  const dispatch = useDispatch();
  const access = useFeeAccess();
  const {payments, loading} = useSelector(state => state.fees);

  useEffect(() => {
    dispatch(fetchFees(access));
  }, [access, dispatch]);

  return (
    <ScreenContainer>
      <SectionHeader
        title="Payment History"
        subtitle="Cash, UPI, and ledger transactions"
      />
      <FlatList
        data={payments}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        refreshing={loading}
        renderItem={({item}) => <PaymentCard payment={item} />}
        ListEmptyComponent={
          <EmptyState
            title="No payments"
            message="Payment history will appear here."
          />
        }
      />
    </ScreenContainer>
  );
};

export default PaymentHistoryScreen;
