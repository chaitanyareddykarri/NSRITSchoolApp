import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const RevenueOverviewScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Revenue is out of scope"
      message="Payment and fee gateway work is intentionally excluded."
    />
  </ScreenContainer>
);

export default RevenueOverviewScreen;
