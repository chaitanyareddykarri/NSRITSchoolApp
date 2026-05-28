import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const PostNoticeScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="Notices are out of scope"
      message="Notice posting is not part of phases 1-4."
    />
  </ScreenContainer>
);

export default PostNoticeScreen;
