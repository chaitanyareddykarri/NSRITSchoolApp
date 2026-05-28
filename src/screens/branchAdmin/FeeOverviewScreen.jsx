import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const FeeOverviewScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Fees are out of scope"
      message="Fee payment and gateway integrations are intentionally not implemented."
    />
  </ScreenContainer>
);

export default FeeOverviewScreen;
