import React from 'react';
import {EmptyState, Header, ScreenContainer} from '../../components';

const SettingsScreen = () => (
  <ScreenContainer>
    <Header title="Settings" subtitle="Global app configuration" />
    <EmptyState
      title="No settings yet"
      message="Configuration screens can be expanded after core operations stabilize."
    />
  </ScreenContainer>
);

export default SettingsScreen;
