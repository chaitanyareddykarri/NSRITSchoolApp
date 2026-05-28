import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const NoticeBoardScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Notices are out of scope"
      message="Notice workflows are not part of phases 1-4."
    />
  </ScreenContainer>
);

export default NoticeBoardScreen;
