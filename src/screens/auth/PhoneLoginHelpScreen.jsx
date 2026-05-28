import React from 'react';
import {EmptyState, ScreenContainer} from '../../components';

const PhoneLoginHelpScreen = () => (
  <ScreenContainer>
    <EmptyState
      title="OTP login help"
      message="Users sign in with phone OTP. Contact the school office if the registered phone number must be changed."
    />
  </ScreenContainer>
);

export default PhoneLoginHelpScreen;
