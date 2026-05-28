import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const ReceiptScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Receipts are out of scope"
      message="Receipts depend on the deferred fee payment module."
    />
  </ScreenContainer>
);

export default ReceiptScreen;
