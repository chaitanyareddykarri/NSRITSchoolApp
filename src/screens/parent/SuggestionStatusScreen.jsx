import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const SuggestionStatusScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Suggestion status is out of scope"
      message="This workflow is intentionally deferred."
    />
  </ScreenContainer>
);

export default SuggestionStatusScreen;
