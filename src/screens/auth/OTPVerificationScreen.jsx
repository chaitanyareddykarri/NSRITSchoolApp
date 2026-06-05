import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {HelperText, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {CustomButton, CustomInput, ScreenContainer} from '../../components';
import {clearAuthError, verifyOtp} from '../../store/slices/authSlice';
import {colors, spacing, typography} from '../../theme';
import {validateOtp} from '../../utils/validators';

const OTPVerificationScreen = ({route}) => {
  const dispatch = useDispatch();
  const {loading, error, verificationId: storedVerificationId} = useSelector(state => state.auth);
  const [otp, setOtp] = useState('');
  const [localError, setLocalError] = useState('');
  const params = route?.params || {};

  const updateOtp = value => {
    if (error) {
      dispatch(clearAuthError());
    }
    setLocalError('');
    setOtp(value.replace(/\D/g, '').slice(0, 6));
  };

  const handleVerify = async () => {
    console.log('OTPVerificationScreen: handleVerify called. OTP:', otp, 'params:', params);
    const validationError = validateOtp(otp);
    if (validationError) {
      console.log('OTPVerificationScreen: validation error:', validationError);
      setLocalError(validationError);
      return;
    }

    console.log('OTPVerificationScreen: dispatching verifyOtp thunk...');
    const result = await dispatch(
      verifyOtp({
        otp,
        countryCode: params.countryCode,
        phoneNumber: params.phoneNumber,
        verificationId: params.verificationId || storedVerificationId,
      }),
    );
    console.log('OTPVerificationScreen: verifyOtp thunk result:', result);
  };

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <Text style={styles.title}>Verify OTP</Text>
        <Text style={styles.subtitle}>Enter the 6 digit code sent to {params.fullPhoneNumber}</Text>
      </View>
      <CustomInput
        label="OTP"
        keyboardType="number-pad"
        value={otp}
        maxLength={6}
        onChangeText={updateOtp}
      />
      <HelperText type="error" visible={Boolean(localError || error)}>
        {localError || error}
      </HelperText>
      <CustomButton loading={loading} disabled={loading} onPress={handleVerify}>
        Verify and Continue
      </CustomButton>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: spacing.xl,
    marginTop: spacing.xl,
  },
  title: {
    ...typography.title,
    color: colors.text,
  },
  subtitle: {
    color: colors.textMuted,
    marginTop: spacing.sm,
  },
});

export default OTPVerificationScreen;
