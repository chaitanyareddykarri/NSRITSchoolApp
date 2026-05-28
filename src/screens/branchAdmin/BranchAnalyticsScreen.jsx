import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const BranchAnalyticsScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Analytics are out of scope"
      message="Only operational branch views are implemented in the current phases."
    />
  </ScreenContainer>
);

export default BranchAnalyticsScreen;
