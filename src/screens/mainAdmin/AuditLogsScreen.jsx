import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const AuditLogsScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Audit logs are out of scope"
      message="This phase intentionally avoids audit systems."
    />
  </ScreenContainer>
);

export default AuditLogsScreen;
