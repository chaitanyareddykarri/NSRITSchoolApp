import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const FeeLedgerScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Fees are out of scope"
      message="Parent fee ledger is intentionally deferred."
    />
  </ScreenContainer>
);

export default FeeLedgerScreen;
