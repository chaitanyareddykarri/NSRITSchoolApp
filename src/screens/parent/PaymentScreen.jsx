import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const PaymentScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Payments are out of scope"
      message="Razorpay and payment gateway work are not implemented."
    />
  </ScreenContainer>
);

export default PaymentScreen;
