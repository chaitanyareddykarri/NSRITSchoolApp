import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const WingFeesScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Fees are out of scope"
      message="Wing fee screens are intentionally deferred."
    />
  </ScreenContainer>
);

export default WingFeesScreen;
