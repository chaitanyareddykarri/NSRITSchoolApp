import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const SuggestionScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Suggestions are out of scope"
      message="Suggestion workflows are not part of phases 1-4."
    />
  </ScreenContainer>
);

export default SuggestionScreen;
