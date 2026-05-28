import React from 'react';
import {EmptyState, Header, ScreenContainer} from '../../components';

const BranchSettingsScreen = () => (
  <ScreenContainer>
    <Header title="Branch Settings" subtitle="Branch configuration" />
    <EmptyState
      title="Settings pending"
      message="Branch settings can be expanded once master data is finalized."
    />
  </ScreenContainer>
);

export default BranchSettingsScreen;
