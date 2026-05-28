import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const NoticeBoardScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Notices are out of scope"
      message="Notice board features are deferred for this build scope."
    />
  </ScreenContainer>
);

export default NoticeBoardScreen;
