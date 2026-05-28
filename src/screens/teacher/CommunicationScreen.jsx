import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const CommunicationScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Communication is out of scope"
      message="Messaging is not included in phases 1-4."
    />
  </ScreenContainer>
);

export default CommunicationScreen;
