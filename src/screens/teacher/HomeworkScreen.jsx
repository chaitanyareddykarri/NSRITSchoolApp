import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const HomeworkScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Homework is out of scope"
      message="Homework workflows are reserved for a later phase."
    />
  </ScreenContainer>
);

export default HomeworkScreen;
