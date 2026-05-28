import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const ViewAllFeesScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Fees are out of scope"
      message="Fee views are intentionally deferred."
    />
  </ScreenContainer>
);

export default ViewAllFeesScreen;
