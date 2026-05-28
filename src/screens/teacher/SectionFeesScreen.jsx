import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const SectionFeesScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Fees are out of scope"
      message="Teacher fee views are intentionally deferred."
    />
  </ScreenContainer>
);

export default SectionFeesScreen;
